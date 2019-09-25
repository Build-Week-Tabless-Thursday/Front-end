import { GET_TABS_START, GET_TABS_SUCCESS, GET_TABS_FAILURE } from './tabs.actions';
import {GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE} from './tabs.actions'

const initialState = {
  list: [],
  categories: [],
  error: ''
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
  switch (action.type){
    case GET_CATEGORIES_START:
      return{
        ...state
      }
    case GET_CATEGORIES_SUCCESS:
      return{
        ...state,
        categories: action.payload
      }
    case GET_TABS_FAILURE:
      return{
        ...state
      }
    
    default:
      return state;
  }
}
