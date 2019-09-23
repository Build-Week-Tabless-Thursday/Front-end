import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/index';

const initialState = {
  isLoggedIn: false,
  loginError: '',
  userID: 0,
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
        userID: action.payload,
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
