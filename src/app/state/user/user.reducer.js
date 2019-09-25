import { DELETE_USER_SUCCESS } from './user.actions';
import { GET_USER_FAILURE, GET_USER_START, GET_USER_SUCCESS } from './user.actions';
import { EDIT_USER_SUCCESS } from './user.actions';

export const deleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_SUCCESS:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};
