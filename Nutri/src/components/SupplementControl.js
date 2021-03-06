import React from 'react';
// import SupplementDetail from './SupplementDetail';
// import SupplementList from './SupplementList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeApiCall } from './../actions';
// import * as a from './../actions';

class SupplementControl extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(makeApiCall());
    }
        // suppData is undefined
    render() {

        const { error, isLoading, suppList:suppData } = this.props;
        if (error) {
            return <>Error: { error.message }</>
        } else if (isLoading || !suppData) {
            return <>Loading...</>
        } else {
            return (
                <>
                <h1>Supplements</h1>
                <ul>
                    {suppData.map((supplement, index) =>
                        <li key = {index}>
                            <p>{supplement[0].name}</p>
                        </li>
                    )}
                </ul>
                </>
            );
        }
    }
}

SupplementControl.propTypes = {
    suppListVisibleOnPage: PropTypes.bool,
    malListVisibleOnPage: PropTypes.bool,
    suppDetailsVisibleOnPage: PropTypes.bool,
    suppData: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string
}

const mapStateToProps = state => {
    return {
        // suppListVisibleOnPage: state.suppDetailsVisibleOnPage,
        // malListVisibleOnPage: state.malListVisibleOnPage,
        // suppDetailsVisibleOnPage: state.suppDetailsVisibleOnPage,
        suppData: state.suppData,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps)(SupplementControl);