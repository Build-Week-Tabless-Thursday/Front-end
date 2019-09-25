import axios from 'axios';
import { axiosWithAuth } from '../../utils/AxiosWithAuth';

// export const GET_CATEGORIES_START = 'GET_CATEGORIES_START';
// export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
// export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export const GET_TABS_START = 'GET_TAB_START';
export const GET_TABS_SUCCESS = 'GET_TAB_SUCCESS';
export const GET_TABS_FAILURE = 'GET_TAB_FAILURE';

export const DELETE_TAB = 'DELETE_TAB';

//ALL USER TABS

export const getTabsAction = () => dispatch => {
  dispatch({ type: GET_TABS_START });

  const tabExample = [
    {
      id: '1',
      title: 'Test',
      url: 'https://www.instacart.com/',
      category: 'Personal',
      due: new Date(),
      note: '',
      preview:
        'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
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
    });

  const categories = tabExample
    .map(tab => tab.category)
    .filter((category, index, categories) => categories.indexOf(category) !== index);

  //PAYLOAD MIGHT NOT BE CORRECT BELOW

  dispatch({
    type: GET_TABS_SUCCESS,
    payload: categories,
  });
};

export const postTab = () => dispatch => {
  axiosWithAuth()
    .put('https://bw-tabless.herokuapp.com/tabs')
    .then(res => {
      console.log('postTab', res);
    });
};

//INDIVIDUAL TABS

export const getTab = id => dispatch => {
  axiosWithAuth()
    .get(`https://bw-tabless.herokuapp.com/tab/${id}`)

    .then(res => {
      console.log('get tab', res);
    });
};

export const editTabs = (newtab, id) => dispatch => {
  axiosWithAuth()
    .put(`https://bw-tabless.herokuapp.com/tab/${id}`, newtab)

    .then(res => {
      console.log('edit tab', res);
    });
};

export const deleteTabs = id => dispatch => {
  axiosWithAuth()
    .delete(`https://bw-tabless.herokuapp.com/tab/${id}`)

    //dispatch a delete tab

    .then(res => {
      dispatch({ type: DELETE_TAB, payload: res.data });
      console.log('edit tab', res);
    });
};
