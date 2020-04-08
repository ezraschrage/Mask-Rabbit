import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            zip: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Log in or sign up with email
          <br />
          Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>First Name
              <input type="text"
                                value={this.state.firstName}
                                onChange={this.update('firstName')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Last Name
              <input type="text"
                                value={this.state.lastName}
                                onChange={this.update('lastName')}
                                className="login-input"
                            />
                        </label>
                        <label>Email Address
              <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <label>Password
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <label>Zip Code
              <input type="password"
                                value={this.state.zip}
                                onChange={this.update('zip')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;