import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const RouterContext = React.createContext(null);

const HookedBrowserRouter = ({ children }) => (
  <Router>
    <Route>{routeProps => <RouterContext.Provider value={routeProps}>{children}</RouterContext.Provider>}</Route>
  </Router>
);

function useRouter() {
  return React.useContext(RouterContext);
}

export { HookedBrowserRouter, useRouter };
