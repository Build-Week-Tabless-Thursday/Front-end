import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Theme } from './theme/config.theme';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { ErrorComponent } from './components/reusable/error.component';
import { PrivateRoutes } from './components/reusable/private-route.component';

import { HomePage } from './pages/home.page';
import { LoginPage } from './pages/login.page';
import { TabPage } from './pages/tab.page';

import { store } from './state/store';

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/login" component={LoginPage} />

                <PrivateRoutes>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/create" component={TabPage} />
                  <Route exact path="/tab/:id" component={TabPage} />
                </PrivateRoutes>

                {/* 404 */}
                <Route exact component={LoginPage} />
              </Switch>
              <ErrorComponent />
            </Router>
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
