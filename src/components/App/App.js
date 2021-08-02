import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';

import './App.css';

function App() {
  const { token, setToken } = useToken();
  const logOut = () => {
    localStorage.removeItem('log');
    window.location.reload(false);
  };

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
      <div className="wrapper">
        <BrowserRouter>
            <div className="main-menu">
              <div className="header">
                <h1>Application</h1>
                <div className="navigation-menu">
                    <Link
                        to="/dashboard"
                        className="navigation-box"
                    >Dashboard
                    </Link>
                    <Link
                        to="/preferences"
                        className="navigation-box"
                    >Preferences
                    </Link>
                </div>
                <input
                    className="logout"
                    type="button"
                    value="LogOut"
                    onClick={logOut}
                />
              </div>

                <Switch>
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="/preferences">
                    <Preferences />
                  </Route>
                </Switch>
            </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
