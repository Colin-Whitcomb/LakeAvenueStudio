import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Landing from '../../pages/Landing/index'
import Home from '../../pages/Home/index'

// These names need to line up in the Switch
function LandingPage() {
    return (
      <Landing/> 
    )
  }
  
  function HomePage() {
    return (
      <Home /> 
    )
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
  
  // what we are exporting on this file
  export default function NavBar() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Landing</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  