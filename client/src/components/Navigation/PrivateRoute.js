import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Home';
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
      <Route path="/home" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  );
}