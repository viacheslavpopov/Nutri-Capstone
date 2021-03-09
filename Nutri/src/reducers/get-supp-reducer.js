import * as c from './../actions/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
  case c.GET_SUPP_SUCCESS:
      return action.suppData
    default:
      return state;
  }
}