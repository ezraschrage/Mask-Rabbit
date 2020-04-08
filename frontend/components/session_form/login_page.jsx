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
            <div>
                <h3>Log in or sign up with email</h3>
                <Link to="/login/email">Log in</Link>
                <Link to="/signup/password">Sign up</Link>
                <button onClick={this.handleSubmit}>
                    Use a demo account 
                </button>
            </div>
        );
    }
}

export default (LoginPage);
