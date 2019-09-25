import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Theme } from './theme/config.theme';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

// import { AppBar } from './components/nav/bar.component';
import { PrivateRoute } from './components/reusable/private-route.component';

import { HomePage } from './pages/home.page';
import { LoginPage } from './pages/login.page';
import { SharePage } from './pages/share.page';
import { TabPage } from './pages/tab.page';
import { SignupPage } from './pages/signup.page';
import { NavDrawer } from './components/nav/drawer.component';
import { NavBar } from './components/nav/bar.component';

import { store } from './state/store';

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Provider store={store}>
            <Router>
              {/* <AppBar /> */}
              <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute exact path="/share/:uuid" component={SharePage} />
                <PrivateRoute exact path="/tab/:id" component={TabPage} />

                {/* TESTING */}
                <Route exact path="/drawer" component={NavDrawer} />
                <Route exact path="/navbar" component={NavBar} />
              </Switch>
            </Router>
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
