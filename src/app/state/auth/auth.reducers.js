import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from './auth.actions';
import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './auth.actions';

const initialState = {
  isLoggedIn: false,
  loginError: '',
  token: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        loginError: action.payload,
      };
    default:
      return state;
  }
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};