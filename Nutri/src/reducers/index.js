import suppDetailsVisibleReducer from './supp-details-visible-reducer';
import suppListVisibleReducer from './supp-list-visible-reducer';
import malListVisibleReducer from './mal-list-visible-reducer';

const rootReducer = combineReducers({
    suppDetailsVisibleOnPage: suppDetailsVisibleReducer,
    suppListVisibleOnPage: suppListVisibleReducer,
    malListVisibleOnPage: malListVisibleReducer
});

export default rootReducer;