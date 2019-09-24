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
      console.log('login res', res);

      localStorage.setItem('token', res.data.token);

      dispatch({ type: LOGIN_START, payload: res.data.token });

      //   history.push('/');
      return true;
    })
    .catch(err => {
      console.log('login err', err);

      dispatch({ type: LOGIN_FAILURE, payload: err.response });
      return false;
    });
};

export const signupAction = (credentials, history) => dispatch => {
  dispatch({ type: SIGNUP_START });

  axios
    .post('https://bw-tabless.herokuapp.com/register', credentials)
    .then(res => {
      console.log('signup', res);

      dispatch({ type: SIGNUP_SUCCESS });

      history.push('/login');
    })

    .catch(err => {
      console.log('signup error', err);

      dispatch({ type: SIGNUP_FAILURE, payload: err.response });
    });
};
