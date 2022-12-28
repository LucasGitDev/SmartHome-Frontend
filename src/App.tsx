import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AuthService from "./services/auth.service";
import AuthPage from "./components/AuthPage";
import { Logout } from "./components/Logout";
import { PrivateRoutes } from "./routing/PrivateRoutes";

const App: React.FC = () => {
  useEffect(() => {
    const token = AuthService.getCurrentUser();
    if (
      Object.keys(token).length === 0 &&
      !document.location.href.includes("auth/login")
    ) {
      document.location.href = '#/auth/login';
    }
  }, [window.location.pathname]);

  return (
    <HashRouter>
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={AuthPage} />
        <PrivateRoutes />
      </Switch>
    </HashRouter>
  );
};

export { App };
