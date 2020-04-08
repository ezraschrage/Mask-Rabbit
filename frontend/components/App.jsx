import React from "react";
import { Route, Redirect, Link, Switch } from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPageContainer from './session_form/login_page_container';
import GreetingContainer from "./greeting/greeting_container";

const App = () => (
    <div>
        <h1>MaskRabbit</h1>
        <Switch>
            <AuthRoute exact path="/login" component={LoginPageContainer} />
            <AuthRoute exact path="/login/email" component={LoginFormContainer} />
            <AuthRoute exact path="/signup/password" component={SignupFormContainer} />
            <Route exact path="/" component={GreetingContainer} />
        </Switch>
    </div>
);

export default App;