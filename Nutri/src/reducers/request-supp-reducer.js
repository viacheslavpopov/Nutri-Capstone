import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.REQUEST_SUPP:
      return state
    default:
      return !state;
  }
}