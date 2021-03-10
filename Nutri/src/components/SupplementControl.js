import React from 'react';
import MaladyList from './MaladyList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeApiCall } from './../actions';
import * as a from './../actions';
import SupplementList from './SupplementList';

class SupplementControl extends React.Component {

    handleSelectMalady = (maladyType, maladyName) => {
        const { dispatch } = this.props;
        const action = a.toggleMal();
        const action2 = a.toggleSuppList();
        const action3 = a.getMalady(maladyName);
        dispatch(makeApiCall(maladyType));
        dispatch(action);
        dispatch(action2);
        dispatch(action3);
        console.log(this.props.suppListVisibleOnPage);
    }

    handleReturnToMainPage = () => {
        const { dispatch } = this.props;
        const action = a.toggleMal();
        const action2 = a.toggleSuppList();
        dispatch(action);
        dispatch(action2);
        console.log("hello");
    }

    render() {
        let currentVisibleState = null;
        const { error, suppData } = this.props;
        if (error) {
            return <>Error: {error.message}</>
        } else if (this.props.malListVisibleOnPage) {
            currentVisibleState = <MaladyList onSelectMalady = {this.handleSelectMalady} />;
        } else if (suppData.length > 1 && this.props.suppListVisibleOnPage) {
            currentVisibleState = <SupplementList onSelectBackButton = {this.handleReturnToMainPage} />
        }
        return (
            <>
                {currentVisibleState}
                {/* {suppData.length > 1 && <SupplementList />} */}
            </>
        )
    }
}

SupplementControl.propTypes = {
    suppListVisibleOnPage: PropTypes.bool,
    malListVisibleOnPage: PropTypes.bool,
    suppData: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    maladyName: PropTypes.string
}

const mapStateToProps = state => {
    return {
        suppListVisibleOnPage: state.suppListVisibleOnPage,
        malListVisibleOnPage: state.malListVisibleOnPage,
        suppData: state.suppData,
        isLoading: state.isLoading,
        error: state.error,
        maladyName: state.maladyName
    }
}

export default connect(mapStateToProps)(SupplementControl);