import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from './App/Pages/Dashboard';
import Login from './App/Pages/Login';
import PageNotFound from './App/Pages/PageNotFound';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/user/:slug" component={Dashboard} />

          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
