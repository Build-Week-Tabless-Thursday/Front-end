import { GET_TABS_START, GET_TABS_SUCCESS, GET_TABS_FAILURE, DELETE_TAB } from './tabs.actions';
import { GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE } from './tabs.actions';
import { ADD_TAB_LOCAL, ADD_TAB_SUCCESS, ADD_TAB_START } from './tabs.actions';

const initialState = {
  list: [],
  categories: [],
  error: '',
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

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TABS_START:
      return {
        ...state,
      };
    case GET_TABS_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_TABS_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export const individualTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TAB:
      return state.filer(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

export const addTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAB_START:
      return {
        ...state,
      };
    case ADD_TAB_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
