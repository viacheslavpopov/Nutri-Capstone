import React from 'react';
import SupplementDetail from './SupplementDetail';
import SupplementList from './SupplementList';
import { connect } from 'prop-types';
import PropTypes from 'prop-types';
import * as a from './../actions';

class SupplementControl extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            </>
        );
    }
}

SupplementControl.propTypes = {
    masterSupplementList: PropTypes.object,
    suppListVisibleOnPage: PropTypes.bool,
    malListVisibleOnPage: PropTypes.bool,
    suppDetailsVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        masterSupplementList: state.masterSupplementList,
        suppListVisibleOnPage: state.suppDetailsVisibleOnPage,
        malListVisibleOnPage: state.malListVisibleOnPage,
        suppDetailsVisibleOnPage: state.suppDetailsVisibleOnPage
    }
}

SupplementControl = connect(mapStateToProps)(SupplementControl);

export default SupplementControl;