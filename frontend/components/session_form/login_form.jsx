import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginBool: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigagteLoginForm = this.navigagteLoginForm.bind(this);
        this.navigagteSignupForm = this.navigagteSignupForm.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    navigagteLoginForm(e) {
        e.preventDefault();
        this.setState ({ loginBool: true })
    }

    navigagteSignupForm(e) {
        e.preventDefault();
        this.props.history.push("/signup")
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

        const loginForm =
            <form onSubmit={this.handleSubmit} className="login-form-box">
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
        ;

        const loginSplash =
            <div>
                <h3>Log in or sign up with email</h3>
                <button onClick={this.navigagteLoginForm}>Log in</button>
                <button onClick={this.navigagteSignupForm}>Sign up</button>
            </div>
        ;

        const display = loginForm;
        

        return (
            <>
            <div className="login-form-container">
                {display}
            </div>
            </>
        );
    }
}

export default LoginForm;