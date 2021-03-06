import * as c from './ActionTypes';

export const toggleMal = () => ({
    type: c.TOGGLE_MAL
});

export const toggleDetails = () => ({
    type: c.TOGGLE_DETAILS
});

export const toggleSupList = () => ({
    type: c.TOGGLE_SUP_LIST
});

export const requestSupplements = () => ({
    type: c.REQUEST_SUPP
});

export const getSuppSuccess = (suppData) => ({
    type: c.GET_SUPP_SUCCESS,
    suppData
});

export const getSuppFailure = (error) => ({
    type: c.GET_SUPP_FAILURE,
    error
});

export const makeApiCall = () => {
    return dispatch => {
        dispatch(requestSupplements);
        return fetch(`http://localhost:5000/api/supplements/`) // ${malady} to search by malady clicked by user
            .then(response => response.json())
            .then(
                (jsonifiedResponse) => {
                    dispatch(getSuppSuccess(jsonifiedResponse));
                })
            .catch((error) => {
                dispatch(getSuppFailure(error));
            });
    }
}