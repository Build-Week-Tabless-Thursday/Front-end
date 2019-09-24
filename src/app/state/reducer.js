import { combineReducers } from 'redux';

import { loginReducer, signupReducer } from './auth/auth.reducers';

export const reducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});
