import { combineReducers } from 'redux';

import { authReducer } from './auth/auth.reducers';
import { tabsReducer } from './tabs/tabs.reducers';
import { userReducer } from './tabs/tabs.reducers';

export const reducer = combineReducers({ auth: authReducer, tabs: tabsReducer, user: userReducer });
