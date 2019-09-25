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
      localStorage.removeItem('token');
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
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        error: action.payload,
      };

    case SIGNOUT_START:
      return {
        ...state,
      };
    case SIGNOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        token: action.payload,
        error: '',
      };
    case SIGNOUT_FAILURE:
      return {
        ...state,
        token: '',
        error: action.payload,
      };

    case DELETE_ACCOUNT_START:
      return {
        ...state,
      };
    case DELETE_ACCOUNT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        error: '',
      };
    case DELETE_ACCOUNT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
