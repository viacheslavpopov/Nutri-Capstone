import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  switch (action.type) {
  case c.DISPLAY_MAL:
      return action.maladyName
    default:
      return state;
  }
}