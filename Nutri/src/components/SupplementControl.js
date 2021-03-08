import React from 'react';
// import SupplementDetail from './SupplementDetail';
// import SupplementList from './SupplementList';
import MaladyList from './MaladyList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeApiCall } from './../actions';
import * as a from './../actions';
import SupplementList from './SupplementList';

class SupplementControl extends React.Component {

    // componentDidMount() {
    //     const { dispatch } = this.props;
    //     dispatch(makeApiCall());
    // }
        // suppData is undefined

    // handleToggleLists = () => {
    //     const { dispatch } = this.props;
    //     const action = a.toggleMal;
    //     const action2 = a.toggleSuppList;
    //     dispatch(action);
    //     console.log("hello");
    //     dispatch(action2);
    // }
    // API call first in one function, trigger other state changes in next function? 
    handleSelectMalady = (maladyType) => {
        const { dispatch } = this.props;
        console.log("hello");
        const action = a.toggleMal;
        const action2 = a.toggleSuppList;
        dispatch(action);
        dispatch(action2);
        dispatch(makeApiCall(maladyType));
    }

    render() {
        let currentVisibleState = null;
        const { error } = this.props;
        if (error) {
            return <>Error: {error.message}</>
        } else if (this.props.suppListVisibleOnPage) {
            currentVisibleState = <SupplementList />
        } else {
            currentVisibleState = <MaladyList onSelectMalady = {this.handleSelectMalady} />;
        }
        return (
            <>
                {currentVisibleState}
            </>
        )
    }
}

SupplementControl.propTypes = {
    suppListVisibleOnPage: PropTypes.bool,
    malListVisibleOnPage: PropTypes.bool,
    suppData: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string
}

const mapStateToProps = state => {
    return {
        suppListVisibleOnPage: state.suppListVisibleOnPage,
        malListVisibleOnPage: state.malListVisibleOnPage,
        suppData: state.suppData,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps)(SupplementControl);


// const { error, isLoading, suppData} = this.props;
//         if (error) {
//             return <>Error: { error.message }</>
//         } else if (isLoading || !suppData) {
//             return <>Loading...</>
//         } else {
//             return (
//                 <>
//                 <MaladyList />
//                 <ul>
//                     {suppData.map((supplement, index) =>
//                         <li key = {index}>
//                             <p>{supplement.name}</p>
//                         </li>
//                     )}
//                 </ul>
//                 </>
//             );
//         }