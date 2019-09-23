import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Theme } from '@config/theme.config';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { StoreService } from '@services/store.service';
import { AppBar } from '@components/bar.component';

import { HomePage } from '@pages/home.page';
import { TabPage } from '@pages/tab.page';
import { SharePage } from '@pages/share.page';

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StoreService.Container>
          <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Router>
              <AppBar />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/tab/:id" component={TabPage} />
                <Route exact path="/share/:uuid" component={SharePage} />
              </Switch>
            </Router>
          </ThemeProvider>
        </StoreService.Container>
      </React.Fragment>
    );
  }
}
