import suppDetailsVisibleReducer from './supp-details-visible-reducer';
import suppListVisibleReducer from './supp-list-visible-reducer';
import malListVisibleReducer from './mal-list-visible-reducer';
import getSuppFailReducer from './get-supp-fail-reducer';
import getSuppReducer from './get-supp-reducer';
import requestSuppReducer from './request-supp-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    suppDetailsVisibleOnPage: suppDetailsVisibleReducer,
    suppListVisibleOnPage: suppListVisibleReducer,
    malListVisibleOnPage: malListVisibleReducer,
    suppData: getSuppReducer,
    isLoading: requestSuppReducer,
    error: getSuppFailReducer
});

export default rootReducer;