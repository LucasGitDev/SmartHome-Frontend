import { Redirect, Route, Switch, Link } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";

export default function AuthPage() {
  return (
    <div className="auth-page">
      <h1>Auth Page</h1>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Registration} />
        <Redirect from="/auth" exact={true} to="/auth/login" />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
}
