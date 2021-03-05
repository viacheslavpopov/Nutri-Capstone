import suppListVisibleReducer from '../../reducers/supp-list-visible-reducer';

describe('suppListVisibleReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(suppListVisibleReducer(false, { type: null })).toEqual(false)
  });
});