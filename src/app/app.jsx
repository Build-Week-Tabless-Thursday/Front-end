import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Theme } from './config/theme.config';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { AppBar } from './components/bar.component';

import { HomePage } from './pages/home.page';
import { TabPage } from './pages/tab.page';
import { SharePage } from './pages/share.page';
import Login from './components/Login'

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Router>
            <AppBar />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/tab/:id" component={TabPage} />
              <Route exact path="/share/:uuid" component={SharePage} />
            </Switch>
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
