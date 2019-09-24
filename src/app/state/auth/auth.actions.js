import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const loginAction = credentials => dispatch => {
  console.log('i was here');
  dispatch({ type: LOGIN_START });

  return axios
    .post('https://bw-tabless.herokuapp.com/login', credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};

export const signupAction = credentials => dispatch => {
  dispatch({ type: SIGNUP_START });

  axios
    .post('https://bw-tabless.herokuapp.com/register', credentials)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token });
    })

    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.response });
    });
};
