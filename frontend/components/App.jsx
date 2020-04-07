import React from "react";
import { Route, Redirect, Link, Switch } from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import GreetingContainer from "./greeting/greeting_container";

const App = () => (
    <div>
        <h1>MaskRabbit App! Header</h1>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;