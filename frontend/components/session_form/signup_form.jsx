import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            zip: ''
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
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.session.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session signup">
                <div className="session-container">
                    <div className="logo-session" />
                    <div>
                        {this.renderErrors()}
                    </div>
                    <form onSubmit={this.handleSubmit} className="form-box">
  
                        <span className="text">First Name</span>
                        <input 
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            className="input"
                        />
                        <span className="text">Last Name</span>
                        <input 
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            className="input"
                        />
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
                        <span className="text">Zip Code</span>
                        <input 
                            type="text"
                            value={this.state.zip}
                            onChange={this.update('zip')}
                            className="input"
                        />
                        <button
                            className="btn submit"
                            type="submit"
                        >Create Account
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;