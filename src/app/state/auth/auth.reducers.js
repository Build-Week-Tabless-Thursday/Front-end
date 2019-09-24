import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from './auth.actions';
import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './auth.actions';

const initialState = {
  isLoggedIn: false,
  loginError: '',
  token: '',
  isSignedUp: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
        loginError: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: '',
        isLoggedIn: false,
        loginError: action.payload,
      };

    case SIGNUP_START:
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignedUp: true
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
