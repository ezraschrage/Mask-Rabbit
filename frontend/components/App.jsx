import React from "react";
import { Route } from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
// import GreetingContainer from "./greeting/greeting_container";

const App = () => (
    <div>
        <h1>MaskRabbit App!</h1>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;