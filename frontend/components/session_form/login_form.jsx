import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount() {
        return this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
        this.props.processForm(user);
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
        return (
            <div className="session">
            <div className="session-container">
                <div className="logo"/>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.renderErrors()}
                    <label>Email Address
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                    />
                    </label>
                    <br />
                    <label>Password
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                    />
                    </label>
                    <br />
                    <input 
                        className="session-submit" 
                        type="submit" 
                        value="Log In" 
                    />
                </form>
            </div>
        </div>
        );
    }
}

export default LoginForm;