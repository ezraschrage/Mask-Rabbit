import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginBool: false
        };
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmitForm(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleSubmitLogin(e) {
        e.preventDefault();
        this.setState ({ [loginBool]: true })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        const loginForm = () => {
            <form onSubmit={this.handleSubmitForm} className="login-form-box">
                <label>Email Address
                        <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                    />
                </label>
                <br />
                <label>Password
                        <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                    />
                </label>
                <br />
                <input className="session-submit" type="submit" value="Log In" />
            </form>
        };

        const loginSplash = () => {
            <h3>Log in or sign up with email</h3>
            <form onSubmit={this.handleSubmitLogin} className="login-splash-box">
                <button type="submit"></button>
            </form>
        };




        return (
            <div className="login-form-container">

            </div>
        );
    }
}

export default LoginForm;