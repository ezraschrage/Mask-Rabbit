import React from "react";
import { Route, Redirect, Link, Switch } from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPageContainer from './session_form/login_page_container';
import NavContainer from "./nav/nav_container";
import DashboardContainer from "./dashboard/dashboard_container";
import SplashContainer from "./splash/splash_container";
// Protected: Are you logged in? Go to this. Else to / page
// AuthRoute: Are you not logged in? Go to this. Else to /dash page.

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginPageContainer} />
            <AuthRoute exact path="/login/email" component={LoginFormContainer} />
            <AuthRoute exact path="/signup/password" component={SignupFormContainer} />
            <ProtectedRoute exact path="/dash" component={DashboardContainer} />
            {/* //To be deleted */}
            {/* <Route exact path="/" component={NavContainer} /> */}
            {/* // To be deleted */}
            <AuthRoute exact path="/" component={SplashContainer} />
            <Redirect to='/' />
        </Switch>
    </div>
);

export default App;