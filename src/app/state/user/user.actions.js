import { axiosWithAuth } from '../../utils/AxiosWithAuth';

//USERNAME AND EMAIL

//getting user profile (get)
export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

//editing user profile (put)
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';

//delete user profile (delete)
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export const getUser = () => dispatch => {
  dispatch({ GET_USER_START });

  axiosWithAuth()
    .get('https://bw-tabless.herokuapp.com/me')
    .then(res => {
      console.log('getUser', res);
      dispatch({ GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ GET_USER_FAILURE, payload: err.response });
    });
};

export const editUser = newUser => dispatch => {
  axiosWithAuth()
    .put('https://bw-tabless.herokuapp.com/me', newUser)
    .then(res => {
      console.log('edit user', res);

      dispatch({ EDIT_USER_SUCCESS });
    });
};

export const deleteUser = () => dispatch => {
  axiosWithAuth()
    .delete('https://bw-tabless.herokuapp.com/me')
    .then(res => {
      dispatch({ DELETE_USER_SUCCESS, action: res.data });
    });
};
