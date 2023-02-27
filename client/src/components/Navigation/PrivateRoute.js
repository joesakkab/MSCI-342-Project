import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Search from '../Search';
import history from './history';
import Landing from '../Landing'
import Profile from "../Profile";
import SignUp from "../SignUp";
import * as ROUTES from '../../constants/routes';

export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (

    <Router history={history}>
      <Switch>
        <Route path={ROUTES.LANDING} exact component={Landing} />
        <Route path={ROUTES.PROFILE} exact component={Profile} />
        <Route path={ROUTES.SEARCH} exact component={Search} />
        <Route path={ROUTES.SIGN_UP} exact component={SignUp} />
      </Switch>
    </Router>
  );
}