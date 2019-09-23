import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Theme } from './config/theme.config';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { AppBar } from './components/bar.component';

import { HomePage } from './pages/home.page';
import { LoginPage } from './pages/login.page';
import { SharePage } from './pages/share.page';
import { TabPage } from './pages/tab.page';

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Router>
            <AppBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/share/:uuid" component={SharePage} />
              <Route exact path="/tab/:id" component={TabPage} />
            </Switch>
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
