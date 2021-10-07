import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import store from "./App/Redux/store";
import Dashboard from './App/Pages/Dashboard';
import Login from './App/Pages/Login';
import PageNotFound from './App/Pages/PageNotFound';
import NewsItem from './App/Pages/NewsItem';
toast.configure();



function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/user/dashboard" component={Dashboard} />
              <Route path="/user/news" component={NewsItem} />

              <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
