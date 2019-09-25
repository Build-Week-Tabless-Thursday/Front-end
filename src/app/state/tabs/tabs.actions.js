import { axiosWithAuth } from '../../utils/AxiosWithAuth';

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
export const getTabsAction = () => dispatch => {
  dispatch({ type: GET_TABS_START });

  const tabExample = [
    {
      id: '1',
      title: 'Personal',
      url: 'https://www.instacart.com/',
      category: 'Personal',
      due: new Date(),
      note: '',
      preview:
        'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
    },
    {
      id: '2',
      title: 'Lambda',
      url: 'https://www.instacart.com/',
      category: 'Lambda',
      due: new Date(),
      note: '',
      preview:
        'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
    },
    {
      id: '3',
      title: 'Work',
      url: 'https://www.instacart.com/',
      category: 'Work',
      due: new Date(),
      note: '',
      preview:
        'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
    },
  ];

  axiosWithAuth()
    .get('https://bw-tabless.herokuapp.com/tabs')
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_TABS_SUCCESS,
        payload: tabExample,
      });

      dispatch({ type: SET_CATEGORIES_START });
      const categories = tabExample
        .map(tab => tab.category)
        .filter((category, index, categories) => categories.indexOf(category) !== index);

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
  dispatch({ ADD_TAB_START });
  const tabs = getState().tabs.list;

  dispatch({ ADD_TAB_LOCAL, payload: [...tabs, tabs] });
  axiosWithAuth()
    .post('https://bw-tabless.herokuapp.com/tabs', tab)
    .then(res => {
      console.log('addTab', res);
      dispatch({ ADD_TAB_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ ADD_TAB_FAILURE, payload: err.response });
    });
};

//GET TAB
export const getTab = id => dispatch => {
  return axiosWithAuth()
    .get(`https://bw-tabless.herokuapp.com/tab/${id}`)
    .then(res => {
      console.log('get tab', res);
      return res.data;
    });
};

//EDIT TAB
export const editTabs = (newtab, id) => dispatch => {
  dispatch({ EDIT_TAB_START });
  axiosWithAuth()
    .put(`https://bw-tabless.herokuapp.com/tab/${id}`, newtab)
    .then(res => {
      console.log('edit tab', res);
      dispatch({ EDIT_TAB_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ EDIT_TAB_FAILURE, payload: err.response });
    });
};

//DELETE TAB
export const deleteTabs = id => (dispatch, getState) => {
  dispatch({ DELETE_TAB_START });
  const tabs = getState().tabs.list;

  axiosWithAuth()
    .delete(`https://bw-tabless.herokuapp.com/tab/${id}`)
    .then(res => {
      console.log('edit tab', res);
      dispatch({ type: DELETE_TAB_SUCCESS, payload: tabs.filter(tab => tab.id !== id) });
    })
    .catch(err => {
      dispatch({ type: DELETE_TAB_FAILURE, payload: err.response });
    });
};

//SET CATEGORY
export const setCategory = category => (dispatch, getState) => {
  dispatch({ SET_CATEGORY_START });
  const categories = getState().tabs.category;

  try {
    if (!categories.find(category)) throw new Error('Category is does not exist');
    dispatch({ SET_CATEGORY_SUCCESS, payload: category });
  } catch (err) {
    dispatch({ SET_CATEGORY_FAILURE, payload: err.response });
  }
};
