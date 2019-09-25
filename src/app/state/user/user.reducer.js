import { DELETE_USER_SUCCESS, DELETE_USER_START, DELETE_USER_FAILURE } from './user.actions';
import { GET_USER_FAILURE, GET_USER_START, GET_USER_SUCCESS } from './user.actions';
import { EDIT_USER_SUCCESS, EDIT_USER_FAILURE, EDIT_USER_START } from './user.actions';

const initialState = {
  email: '',
  password: '',
  error: '',
};

export const deleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_START:
      return {
        ...state,
      };
    case DELETE_USER_SUCCESS:
      return state.filter(({ id }) => id !== action.payload);

    case DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
      };

    //I don't know if action.payload.email  will work
    case GET_USER_SUCCESS:
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_START:
      return {
        ...state,
      };

    //dont think I will need a payload for editing
    case EDIT_USER_SUCCESS:
      return {
        ...state,
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
