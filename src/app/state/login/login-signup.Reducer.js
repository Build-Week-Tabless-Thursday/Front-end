import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../actions/index';

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
