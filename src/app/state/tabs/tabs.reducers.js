import { GET_TABS_START, GET_TABS_SUCCESS, GET_TABS_FAILURE } from './tabs.actions';

const initialState = {
  list: [],
};

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TABS_START:
      return {
        ...state,
      };
    case GET_TABS_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case GET_TABS_FAILURE:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
