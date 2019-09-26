import { axiosWithAuth } from '../../utils/axiosWithAuth';

//GET USER
export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

//GET EDIT
export const EDIT_USER_START = 'EDIT_USER_START';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';

// ERRORS
export const CLEAR_ERROR = 'CLEAR_ERROR';

const endpoint = 'https://tabless-thursdays.herokuapp.com/me';

// GET USER
export const getUser = () => dispatch => {
  dispatch({ type: GET_USER_START });
  axiosWithAuth()
    .get(endpoint)
    .then(res => {
      console.log('getUser', res);
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAILURE, payload: err.response });
    });
};

//GET EDIT
export const editUser = newUser => dispatch => {
  dispatch({ type: EDIT_USER_START });
  axiosWithAuth()
    .put(endpoint, newUser)
    .then(res => {
      console.log('edit user', res);
      dispatch({ type: EDIT_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_USER_FAILURE, payload: err.response });
    });
};
