import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Theme } from './theme/config.theme';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { NavBar } from './components/nav/bar.component';
import { NavDrawer } from './components/nav/drawer.component';
import { PrivateRoutes } from './components/reusable/private-route.component';
import { Confirm } from './components/reusable/Confirm.component';

import { HomePage } from './pages/home.page';
import { LoginPage } from './pages/login.page';
import { SharePage } from './pages/share.page';
import { TabPage } from './pages/tab.page';

import { store } from './state/store';
import { TabSearch } from './components/tab/search.component';

export class App extends React.Component {
  constructor() {
    super();
    this.state = { drawerOpen: false, searchOpen: false };
  }

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Provider store={store}>
            <Router>
              <NavBar
                onMenu={() => this.setState({ drawerOpen: true })}
                onSearch={() => this.setState({ searchOpen: true })}
                excludeRoutes={['/login', '/create', '/tab']}
              />
              <NavDrawer
                open={this.state.drawerOpen}
                onChange={() => this.setState({ drawerOpen: false })}
                onClose={() => this.setState({ drawerOpen: false })}
                excludeRoutes={['/login', '/create', '/tab']}
              />
              <Switch>
                <Route exact path="/login" component={LoginPage} />

                <PrivateRoutes>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/create" component={TabPage} />
                  <Route exact path="/share/:uuid" component={SharePage} />
                  <Route exact path="/tab/:id" component={TabPage} />
                  <Route exact path="/confirm" component={Confirm} />
                </PrivateRoutes>

                {/* TESTING */}
                <Route exact path="/searchbar" component={TabSearch} />

                {/* 404 */}
                <Route exact component={LoginPage} />
              </Switch>
            </Router>
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
