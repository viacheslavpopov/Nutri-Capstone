// import databaseReducer from '../../reducers/database-reducer';
// import * as actions from './../../actions';
// import * as c from './../../actions/ActionTypes';

// describe('Supplement Database Reducer Actions', () => {
//   const defaultState = {
//     isLoading: false,
//     suppData: [],
//     error: null
//   };

//   const loadingState = {
//     isLoading: true,
//     suppData: [],
//     error: null
//   };

//   test('Should successfully return the default state if no actoin is passed into it', () => {
//     expect(databaseReducer(defaultState, { type: null })).toEqual(
//       {
//         isLoading: false,
//         suppData: [],
//         error: null
//       }
//     );
//   });

//   test('Should change isLoading to false and update suppData after success', () => {
//     const suppData = "Milk Thistle";
//     const action = {
//       type: c.GET_SUPP_SUCCESS,
//       suppData
//     };

//     expect(databaseReducer(loadingState, action)).toEqual({
//       isLoading: false,
//       suppData: "Milk Thistle",
//       error: null
//     });
//   });
// });

// NOTE: reducer was removed and replaced, kept test for reference