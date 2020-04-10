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
            <div className="session login">
                <div className="session-container">
                    <div className="logo-long"/>
                    <form onSubmit={this.handleSubmit} className="form-box">
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <span className="text">Email Address</span>
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="input"
                        />
                        <span className="text">Password</span>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="input"
                        />
                        <button 
                            className="btn submit" 
                            type="submit" 
                            >Log in
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;