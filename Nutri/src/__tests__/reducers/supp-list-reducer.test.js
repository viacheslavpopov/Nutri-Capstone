import suppListVisibleReducer from '../../reducers/supp-list-visible-reducer';
import * as c from './../../actions/ActionTypes';

describe('suppListVisibleReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(suppListVisibleReducer(false, { type: null })).toEqual(false)
  });

  test('Should return true if action type is passed into the reducer', () => {
    expect(suppListVisibleReducer(false, { type: c.TOGGLE_SUPP_LIST })).toEqual(true);
  });

});