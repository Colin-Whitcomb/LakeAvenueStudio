import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './pages/Landing/index'
import Home from './pages/Home/index'
import NavBar from './globalComponents/NavBar'

export default function App() {
  return (
    
      <div>
        <NavBar />
      </div>
  );
}
