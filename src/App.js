import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { ToastContainer, toast } from "react-toastify";

import Dashboard from './App/Pages/Dashboard';
import Login from './App/Pages/Login';
import PageNotFound from './App/Pages/PageNotFound';
import NewsItem from './App/Pages/NewsItem';
toast.configure();



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/user/:slug" component={Dashboard} />
          <Route path="/news/:slug" component={NewsItem} />

          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
