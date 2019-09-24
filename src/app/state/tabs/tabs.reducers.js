import { GET_TABS_START, GET_TABS_SUCCESS, GET_TABS_FAILURE } from './tabs.actions';

const initialState = {
  list: [
    {
      title: 'Instacart',
      url: 'https://www.instacart.com/',
      category: 'Personal',
      due: new Date(),
      note: '',
      preview:
        'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    },
  ],
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
        tab: action.payload,
      };
    case GET_TABS_FAILURE:
      return {
        ...state,
        tab: action.payload,
      };
    default:
      return state;
  }
};
