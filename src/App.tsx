import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'wouter';

const Homepage = lazy(() => import('@/pages/Homepage/Homepage'));
const Country = lazy(() => import('@/pages/Country/Country'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

const App = () => {
  return (
    <React.StrictMode>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/country/:code">
            <Country />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </React.StrictMode>
  );
};

export default App;
