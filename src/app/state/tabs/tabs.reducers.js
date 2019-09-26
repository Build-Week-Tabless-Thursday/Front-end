import { GET_TABS_START, GET_TABS_SUCCESS, GET_TABS_FAILURE } from './tabs.actions';
import {
  SET_CATEGORIES_START,
  SET_CATEGORIES_SUCCESS,
  SET_CATEGORIES_FAILURE,
} from './tabs.actions';
import { ADD_TAB_START, ADD_TAB_LOCAL, ADD_TAB_SUCCESS, ADD_TAB_FAILURE } from './tabs.actions';
import { DELETE_TAB_START, DELETE_TAB_SUCCESS, DELETE_TAB_FAILURE } from './tabs.actions';
import { EDIT_TAB_START, EDIT_TAB_SUCCESS, EDIT_TAB_FAILURE } from './tabs.actions';
import { SET_CATEGORY_START, SET_CATEGORY_SUCCESS, SET_CATEGORY_FAILURE } from './tabs.actions';
import { SET_TAB_ERROR, CLEAR_ERROR } from './tabs.actions';

const initialState = {
  list: null,
  categories: ['All'],
  category: 'All',
  error: '',
};

//REDUCER FOR TABS
export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET TAB
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
        err: action.payload,
      };

    //SET CATEGORIES
    case SET_CATEGORIES_START:
      return {
        ...state,
      };
    case SET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: ['All', ...action.payload],
      };
    case SET_CATEGORIES_FAILURE:
      return {
        ...state,
        err: action.payload,
      };

    //ADD TAB
    case ADD_TAB_START:
      return {
        ...state,
      };
    case ADD_TAB_LOCAL:
      return {
        ...state,
        list: action.payload,
      };
    case ADD_TAB_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case ADD_TAB_FAILURE:
      return {
        ...state,
        err: action.payload,
      };

    //DELETE TAB
    case DELETE_TAB_START:
      return {
        ...state,
      };
    case DELETE_TAB_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case DELETE_TAB_FAILURE:
      return {
        ...state,
        err: action.payload,
      };

    //EDIT TAB
    case EDIT_TAB_START:
      return {
        ...state,
      };
    case EDIT_TAB_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case EDIT_TAB_FAILURE:
      return {
        ...state,
        err: action.payload,
      };

    //SET CATEGORY
    case SET_CATEGORY_START:
      return {
        ...state,
      };
    case SET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
      };
    case SET_CATEGORY_FAILURE:
      return {
        ...state,
        err: action.payload,
      };

    //SET TAB
    case SET_TAB_ERROR:
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
