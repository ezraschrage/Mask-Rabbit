import React from 'react';
import ReactDOM from 'react-dom';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = { email: "guest@guest.com", password: "abcdef" }
        this.props.processForm(user);
    }

    render() {
        return (
            <div className="session">
            <div className="session-container-splash">
                <div className="logo" />
                <div>Facebook (coming soon!)</div>
                <div>Google (coming soon!</div>
                <h3>Log in or sign up with email</h3>
                <button onClick={this.handleSubmit}>Use a demo account</button>
                <div className="session-links">
                <Link to="/login/email">
                    <button type="button">
                            Log in
                    </button>
                </Link>
                <Link to="/signup/password">
                    <button type="button">
                        Sign up
                    </button>
                
                </Link>
                </div>
            </div>
            </div>
        );
    }
}

export default (LoginPage);
