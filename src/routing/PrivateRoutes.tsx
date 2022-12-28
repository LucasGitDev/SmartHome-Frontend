import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../components/Home";

import { Logout } from "./../components/Logout";

export function PrivateRoutes() {
  return (
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/logout" component={Logout} />
      <Redirect from="/auth" to="/home" />
      <Redirect exact from="/" to="/home" />
      <Redirect to="home" />
    </Switch>
  );
}
