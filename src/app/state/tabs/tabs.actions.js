import { axiosWithAuth } from '../../utils/axiosWithAuth';

//GET TABS
export const GET_TABS_START = 'GET_TABS_START';
export const GET_TABS_SUCCESS = 'GET_TABS_SUCCESS';
export const GET_TABS_FAILURE = 'GET_TABS_FAILURE';

//SET CATEGORIES
export const SET_CATEGORIES_START = 'SET_CATEGORIES_START';
export const SET_CATEGORIES_SUCCESS = 'SET_CATEGORIES_SUCCESS';
export const SET_CATEGORIES_FAILURE = 'SET_CATEGORIES_FAILURE';

//ADD TAB
export const ADD_TAB_START = 'ADD_TAB_START';
export const ADD_TAB_LOCAL = 'ADD_TAB_LOCAL';
export const ADD_TAB_SUCCESS = 'ADD_TAB_SUCCESS';
export const ADD_TAB_FAILURE = 'ADD_TAB_SUCCESS';

//DELETE INDIVIDUAL TAB
export const DELETE_TAB_START = 'DELETE_TAB_START';
export const DELETE_TAB_SUCCESS = 'DELETE_TAB_SUCCESS';
export const DELETE_TAB_FAILURE = 'DELETE_TAB_FAILURE';

//EDIT INDIVIDUAL TAB
export const EDIT_TAB_START = 'EDIT_TAB_START';
export const EDIT_TAB_SUCCESS = 'EDIT_TAB_SUCCESS';
export const EDIT_TAB_FAILURE = 'EDIT_TAB_FAILURE';

//GET CATEGORY
export const SET_CATEGORY_START = 'SET_CATEGORY_START';
export const SET_CATEGORY_SUCCESS = 'SET_CATEGORY_SUCCESS';
export const SET_CATEGORY_FAILURE = 'SET_CATEGORY_FAILURE';

// ERRORS
export const SET_TAB_ERROR = 'SET_TAB_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

//END POINT FOR TABS
const endpoint = 'https://tabless-thursdays.herokuapp.com';

//GET TABS
export const getTabs = () => dispatch => {
  dispatch({ type: GET_TABS_START });

  axiosWithAuth()
    .get(`${endpoint}/tabs`)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_TABS_SUCCESS,
        payload: res.data,
      });

      dispatch({ type: SET_CATEGORIES_START });
      const categories = res.data
        .map(tab => tab.category)
        .filter(
          (category, index, categories) => categories.indexOf(category) === index && category
        );

      dispatch({
        type: SET_CATEGORIES_SUCCESS,
        payload: categories,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_TABS_FAILURE,
        payload: err.response,
      });

      dispatch({
        type: SET_CATEGORIES_FAILURE,
        payload: err.response,
      });
    });
};

//ADD TAB
export const addTab = tab => (dispatch, getState) => {
  dispatch({ type: ADD_TAB_START });
  const tabs = getState().tabs.list;

  // dispatch({ type: ADD_TAB_LOCAL, payload: [...tabs, tab] });
  axiosWithAuth()
    .post(`${endpoint}/tab`, tab)
    .then(res => {
      dispatch({ type: ADD_TAB_SUCCESS, payload: [...tabs, res.data] });

      dispatch({ type: SET_CATEGORIES_START });
      const categories = [...tabs, tab]
        .map(tab => tab.category)
        .filter(
          (category, index, categories) => categories.indexOf(category) === index && category
        );

      dispatch({
        type: SET_CATEGORIES_SUCCESS,
        payload: categories,
      });
    })
    .catch(err => {
      dispatch({ type: ADD_TAB_FAILURE, payload: err.response });
    });
};

//GET TAB
export const getTab = id => () => {
  return axiosWithAuth()
    .get(`${endpoint}/tab/${id}`)
    .then(res => {
      console.log('get tab', res);
      return res.data;
    });
};

//EDIT TAB
export const editTab = (tab, id) => (dispatch, getState) => {
  dispatch({ type: EDIT_TAB_START });
  const tabs = getState().tabs.list;
  const otherTabs = tabs.filter(item => item.id.toString() !== id);

  axiosWithAuth()
    .put(`${endpoint}/tab/${id}`, { ...tab, preview: null })
    .then(res => {
      console.log('edit tab', res);
      if (res.data) dispatch({ type: EDIT_TAB_SUCCESS, payload: [...otherTabs, tab] });

      dispatch({ type: SET_CATEGORIES_START });
      const categories = [...otherTabs, tab]
        .map(tab => tab.category)
        .filter(
          (category, index, categories) => categories.indexOf(category) === index && category
        );

      dispatch({
        type: SET_CATEGORIES_SUCCESS,
        payload: categories,
      });
    })
    .catch(err => {
      dispatch({ type: EDIT_TAB_FAILURE, payload: err.response });
    });
};

//DELETE TAB
export const deleteTab = id => (dispatch, getState) => {
  dispatch({ type: DELETE_TAB_START });
  const tabs = getState().tabs.list.filter(tab => tab.id !== id);

  axiosWithAuth()
    .delete(`${endpoint}/tab/${id}`)
    .then(res => {
      console.log('delete tab', res);
      if (res.data) dispatch({ type: DELETE_TAB_SUCCESS, payload: tabs });

      dispatch({ type: SET_CATEGORIES_START });
      const categories = tabs
        .map(tab => tab.category)
        .filter(
          (category, index, categories) => categories.indexOf(category) === index && category
        );

      dispatch({
        type: SET_CATEGORIES_SUCCESS,
        payload: categories,
      });
    })
    .catch(err => {
      dispatch({ type: DELETE_TAB_FAILURE, payload: err.response });
    });
};

//SET CATEGORY
export const setCategory = category => (dispatch, getState) => {
  dispatch({ type: SET_CATEGORY_START });
  const categories = getState().tabs.categories;

  try {
    if (!categories.find(items => items === category))
      throw new Error('Category is does not exist');
    dispatch({ type: SET_CATEGORY_SUCCESS, payload: category });
  } catch (err) {
    dispatch({ type: SET_CATEGORY_FAILURE, payload: err.response });
  }
};

//SET ERROR
export const setError = error => dispatch => {
  dispatch({ type: SET_TAB_ERROR, payload: error });
};
