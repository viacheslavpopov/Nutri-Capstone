import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  suppData: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_SUPP:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_SUPP_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        suppData: action.suppData,
        error: null
      });
    case c.GET_SUPP_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}