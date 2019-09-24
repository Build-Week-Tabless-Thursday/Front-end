import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from './auth.actions';
import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './auth.actions';

const initialState = {
  token: localStorage.getItem('token'),
  error: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        loginError: '',
      };
    case LOGIN_FAILURE:
      localStorage.setItem('token', '');
      return {
        ...state,
        token: '',
        error: action.payload,
      };

    case SIGNUP_START:
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        error: '',
      };
    case SIGNUP_FAILURE:
      localStorage.setItem('token', '');
      return {
        ...state,
        token: '',
        error: action.payload,
      };
    default:
      return state;
  }
};
