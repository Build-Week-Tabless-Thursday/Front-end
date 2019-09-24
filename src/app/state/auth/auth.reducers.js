import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from './auth.actions';
import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './auth.actions';

const initialState = {
  token: '',
  error: '',
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
        loginError: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: '',
        loginError: action.payload,
      };

    case SIGNUP_START:
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignedUp: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
