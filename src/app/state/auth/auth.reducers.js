import { CHECK_TOKEN_START, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FAILURE } from './auth.actions';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from './auth.actions';
import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './auth.actions';
import { SIGNOUT_START, SIGNOUT_SUCCESS, SIGNOUT_FAILURE } from './auth.actions';
import {
  DELETE_ACCOUNT_START,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
} from './auth.actions';
import { CLEAR_ERROR } from '../actions';

const initialState = {
  token: '',
  error: '',
};

//REDUCER FOR AUTHORIZATION
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // CHECK TOKEN
    case CHECK_TOKEN_START:
      return {
        ...state,
      };
    case CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: '',
      };
    case CHECK_TOKEN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        error: action.payload,
      };

    // LOGIN
    case LOGIN_START:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        error: '',
      };
    case LOGIN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        error: action.payload,
      };

    // SIGNUP
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

    // SIGNOUT
    case SIGNOUT_START:
      return {
        ...state,
      };
    case SIGNOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        error: '',
      };
    case SIGNOUT_FAILURE:
      return {
        ...state,
      };

    // DELETE ACCOUNT
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

    case CLEAR_ERROR:
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
};
