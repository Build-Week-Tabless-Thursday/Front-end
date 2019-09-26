import { axiosWithAuth } from '../../utils/axiosWithAuth';

//GET TABS
export const GET_TABS_START = 'GET_TAB_START';
export const GET_TABS_SUCCESS = 'GET_TAB_SUCCESS';
export const GET_TABS_FAILURE = 'GET_TAB_FAILURE';

//SET CATEGORIES
export const SET_CATEGORIES_START = 'GET_TAB_START';
export const SET_CATEGORIES_SUCCESS = 'SET_CATEGORIES_SUCCESS';
export const SET_CATEGORIES_FAILURE = 'SET_CATEGORIES_FAILURE';

//ADD TAB
export const ADD_TAB_START = 'ADD_TAB_START';
export const ADD_TAB_LOCAL = 'ADD_TAB_LOCAL';
export const ADD_TAB_SUCCESS = 'ADD_TAB_SUCCESS';
export const ADD_TAB_FAILURE = 'ADD_TAB_SUCCESS';

//DELETE INDIVIDUAL TAB
export const DELETE_TAB_START = 'DELETE_TAB_START';
export const DELETE_TAB_SUCCESS = 'DELETE_TAB_SUCESS';
export const DELETE_TAB_FAILURE = 'DELETE_TAB_SUCCESS';

//EDIT INDIVIDUAL TAB
export const EDIT_TAB_START = 'EDIT_TAB_START';
export const EDIT_TAB_SUCCESS = 'EDIT_TAB_SUCCESS';
export const EDIT_TAB_FAILURE = 'EDIT_TAB_FAILURE';

//GET CATEGORY
export const SET_CATEGORY_START = 'SET_CATEGORY_START';
export const SET_CATEGORY_SUCCESS = 'SET_CATEGORY_SUCCESS';
export const SET_CATEGORY_FAILURE = 'SET_CATEGORY_FAILURE';

//GET TABS
export const getTabs = () => dispatch => {
  dispatch({ type: GET_TABS_START });

  axiosWithAuth()
    .get('https://bw-tabless.herokuapp.com/tabs')
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_TABS_SUCCESS,
        payload: res.data,
      });

      dispatch({ type: SET_CATEGORIES_START });
      const categories = res.data
        .map(tab => tab.category)
        .filter((category, index, categories) => categories.indexOf(category) === index && category);

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

  dispatch({ type: ADD_TAB_LOCAL, payload: [...tabs, tabs] });
  axiosWithAuth()
    .post('https://bw-tabless.herokuapp.com/tab', tab)
    .then(res => {
      dispatch({ type: ADD_TAB_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_TAB_FAILURE, payload: err.response });
    });
};

//GET TAB
export const getTab = id => () => {
  return axiosWithAuth()
    .get(`https://bw-tabless.herokuapp.com/tab/${id}`)
    .then(res => {
      console.log('get tab', res);
      return res.data;
    });
};

//EDIT TAB
export const editTab = (tab, id) => (dispatch, getState) => {
  dispatch({ type: EDIT_TAB_START });
  const tabs = getState().tabs.list.filter(tab => tab.id !== id);
  console.log(tabs);

  axiosWithAuth()
    .put(`https://bw-tabless.herokuapp.com/tab/${id}`, { ...tab, preview: null })
    .then(res => {
      console.log('edit tab', res);
      if (res.data) dispatch({ type: EDIT_TAB_SUCCESS, payload: [...tabs, tab] });
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
    .delete(`https://bw-tabless.herokuapp.com/tab/${id}`)
    .then(res => {
      console.log('Delete tab', res);
      if (res.data) dispatch({ type: DELETE_TAB_SUCCESS, payload: tabs });
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
    if (!categories.find(items => items === category)) throw new Error('Category is does not exist');
    dispatch({ type: SET_CATEGORY_SUCCESS, payload: category });
  } catch (err) {
    dispatch({ type: SET_CATEGORY_FAILURE, payload: err.response });
  }
};
