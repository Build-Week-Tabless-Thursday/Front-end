import { combineReducers } from 'redux';

//reducers
import { loginReducer } from './loginReducer';

export const reducer = combineReducers({
  login: loginReducer,
});
