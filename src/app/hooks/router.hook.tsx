import React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';

const RouterContext = React.createContext(null);

export const HookedBrowserRouter = ({ children }) => (
  <BrowserRouter>
    <Route>
      {(routeProps: RouteProps) => <RouterContext.Provider value={routeProps}>{children}</RouterContext.Provider>}
    </Route>
  </BrowserRouter>
);

export function useRouter() {
  return React.useContext(RouterContext);
}
