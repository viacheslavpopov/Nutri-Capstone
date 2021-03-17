import suppListVisibleReducer from './supp-list-visible-reducer';
import malListVisibleReducer from './mal-list-visible-reducer';
import getSuppFailReducer from './get-supp-fail-reducer';
import getSuppReducer from './get-supp-reducer';
import requestSuppReducer from './request-supp-reducer';
import { combineReducers } from 'redux';
import maladyDisplayReducer from './malady-display-reducer';
import { firestoreReducer } from 'redux-firestore';
import loginReducer from './login-reducer';
import errorMessageReducer from './error-message-reducer';

const rootReducer = combineReducers({
    suppListVisibleOnPage: suppListVisibleReducer,
    malListVisibleOnPage: malListVisibleReducer,
    suppData: getSuppReducer,
    isLoading: requestSuppReducer,
    error: getSuppFailReducer,
    maladyName: maladyDisplayReducer,
    firestore: firestoreReducer,
    loggedIn: loginReducer,
    errorMessage: errorMessageReducer
});

export default rootReducer;