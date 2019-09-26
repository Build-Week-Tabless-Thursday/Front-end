import { GET_USER_SUCCESS, GET_USER_START, GET_USER_FAILURE } from './user.actions';
import { EDIT_USER_SUCCESS, EDIT_USER_FAILURE, EDIT_USER_START } from './user.actions';

const initialState = {
  details: { email: '', username: '' },
  error: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        details: action.payload,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case EDIT_USER_START:
      return {
        ...state,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        details: action.payload,
      };
    case EDIT_USER_FAILURE:
      return {
        ...state,
        error: action.paylaod,
      };

    default:
      return state;
  }
};
