import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Theme } from './config/theme.config';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { AppBar } from './components/bar.component';

import { HomePage } from './pages/home.page';
import LoginPage from './pages/login.page';
import { SharePage } from './pages/share.page';
import { TabPage } from './pages/tab.page';
import { CategoryPage } from './pages/category.page';
import SignupPage from './pages/signup.page';

//redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//reducer
import { reducer } from './reducers/index';

//private route
import { PrivateRoute } from './utils/PrivateRoute';

//google extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//put store in here
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Provider store={store}>
            <Router>
              <AppBar />
              <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute exact path="/share/:uuid" component={SharePage} />
                <PrivateRoute exact path="/tab/:id" component={TabPage} />
                {/* might need id on the tab route */}
                <PrivateRoute exact path="/category" component={CategoryPage} />
              </Switch>
            </Router>
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
