import { axiosWithAuth } from '../../utils/AxiosWithAuth';

//getting user profile (get)
export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

//editing user profile (put)
export const EDIT_USER_START = 'EDIT_USER_START';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';

const endpoint = 'https://bw-tabless.herokuapp.com/me';

export const getUser = () => dispatch => {
  dispatch({ GET_USER_START });
  axiosWithAuth()
    .get(endpoint)
    .then(res => {
      console.log('getUser', res);
      dispatch({ GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ GET_USER_FAILURE, payload: err.response });
    });
};

export const editUser = newUser => dispatch => {
  dispatch({ EDIT_USER_START });
  axiosWithAuth()
    .put(endpoint, newUser)
    .then(res => {
      console.log('edit user', res);
      dispatch({ EDIT_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ EDIT_USER_FAILURE, payload: err.response });
    });
};
