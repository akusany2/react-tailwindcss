import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App';
import { UserInfoContext } from './context';
import { useUserInfo } from './hooks/useUserInfo';
import Dashboard from './pages/dashboard';
import NotFound from './pages/not-found';

export default function Routes() {
  let userInfo = useUserInfo();

  return (
    <UserInfoContext.Provider value={userInfo}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <ProtectedRoute exact path='/dashboard'>
            <Dashboard />
          </ProtectedRoute>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserInfoContext.Provider>
  );
}

function ProtectedRoute({ children, ...rest }) {
  let userInfo = useContext(UserInfoContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userInfo ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
