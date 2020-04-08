import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {

    render() {
        return (
                <div>
                    <h3>Log in or sign up with email</h3>
                <Link to="/login/email">Log in</Link>
                <Link to="/signup/password">Sign up</Link>
                </div>
        );
    }
}

export default (LoginPage);
