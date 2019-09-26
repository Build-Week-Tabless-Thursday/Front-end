import axios from 'axios';

//CHECK TOKEN
export const CHECK_TOKEN_START = 'CHECK_TOKEN_START';
export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
export const CHECK_TOKEN_FAILURE = 'CHECK_TOKEN_FAILURE';

//LOGIN
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// SIGNUP
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// SIGNOUT
export const SIGNOUT_START = 'SIGNOUT_START';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNOUT_FAILURE = 'SIGNOUT_FAILURE';

// DELETE ACCOUNT
export const DELETE_ACCOUNT_START = 'DELETE_ACCOUNT_START';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_START';
export const DELETE_ACCOUNT_FAILURE = 'DELETE_ACCOUNT_START';

// ERRORS
export const CLEAR_ERROR = 'CLEAR_ERROR';

// END POINT FOR ALL THE AUTHORIZATION ACTIONS
const endpoint = 'https://bw-tabless.herokuapp.com';

//CHECK TOKEN ACTION
export const checkToken = () => dispatch => {
  dispatch({ type: CHECK_TOKEN_START });
  try {
    const token = localStorage.getItem('token');
    dispatch({ type: CHECK_TOKEN_SUCCESS, payload: token });
  } catch (err) {
    dispatch({ type: CHECK_TOKEN_FAILURE, payload: err.response });
  }
};

//LOGIN ACTION
export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${endpoint}/login`, credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
};

//SIGN UP ACTION
export const signup = credentials => dispatch => {
  dispatch({ type: SIGNUP_START });
  axios
    .post(`${endpoint}/register`, credentials)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.response.data.error });
    });
};

//SIGN OUT ACTION
export const signout = () => dispatch => {
  dispatch({ type: SIGNOUT_START });
  try {
    dispatch({ type: SIGNOUT_SUCCESS });
  } catch (err) {
    dispatch({ type: SIGNOUT_FAILURE, payload: err.response });
  }
};

//DELETE ACCOUNT
export const deleteAccount = credentials => dispatch => {
  dispatch({ type: DELETE_ACCOUNT_START });
  axios
    .post(`${endpoint}/me`, credentials)
    .then(res => {
      dispatch({ type: DELETE_ACCOUNT_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DELETE_ACCOUNT_FAILURE, payload: err.response });
    });
};
