import { combineReducers } from 'redux';

//reducers
import { loginReducer } from '../state/login/login-signup.Reducer';

export const reducer = combineReducers({
  login: loginReducer,
});
