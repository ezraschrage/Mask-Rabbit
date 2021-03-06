import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPageContainer from './session_form/login_page_container';
import TaskFormContainer from './task_form/task_form_container';
import AccountContainer from './account/account_container';
import SplashContainer from "./splash/splash_container";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginPageContainer} />
            <AuthRoute exact path="/login/email" component={LoginFormContainer} />
            <AuthRoute exact path="/signup/password" component={SignupFormContainer} />
            <ProtectedRoute path="/task/" component={TaskFormContainer} />
            <ProtectedRoute path="/account" component={AccountContainer} />
            <Route exact path="/" component={SplashContainer} />
            <Redirect to='/' />
        </Switch>
    </div>
);

export default App;