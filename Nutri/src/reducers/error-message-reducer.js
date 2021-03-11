import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  switch (action.type) {
  case c.DISPLAY_LOGIN_ERROR:
      return action.errorMessage
    default:
      return state;
  }
}