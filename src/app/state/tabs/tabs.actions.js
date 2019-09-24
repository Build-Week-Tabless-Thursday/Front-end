import axios from 'axios';

export const GET_TABS_START = 'GET_TAB_START';
export const GET_TABS_SUCCESS = 'GET_TAB_SUCCESS';
export const GET_TABS_FAILURE = 'GET_TAB_FAILURE';

export const getTabsAction = () => dispatch => {
  dispatch({ type: GET_TABS_START });

  // return axios
  //   .post('https://bw-tabless.herokuapp.com/login', credentials)
  //   .then(res => {
  //     console.log('login res', res);

  //     localStorage.setItem('token', res.data.token);
  //     dispatch({ type: GET_TAB_SUCCESS, payload: res.data.token });

  //     return true;
  //   })
  //   .catch(err => {
  //     console.log('login err', err);
  //     dispatch({ type: GET_TAB_FAILURE, payload: err.response });
  //     return false;
  //   });

  dispatch({
    type: GET_TABS_SUCCESS,
    payload: [
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
    ],
  });
};
