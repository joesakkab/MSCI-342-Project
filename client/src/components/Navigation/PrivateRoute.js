import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Search from '../Search';
import history from './history';
import Landing from '../Landing'
import SignUpPage from "../SignUp";
import SignUp from "../SignUp";

export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (

    <Router history={history}>
      <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/search" exact component={Search} />
      <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  );
}