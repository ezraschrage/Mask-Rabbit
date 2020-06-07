import React from 'react';
import TasksContainer from '../tasks/tasks_index_container';
import NavContainer from '../nav/nav_container';
import Footer from '../footer/footer_component';

class Account extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            zip: '',
            errors: []
        }
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
        const errors = this.state.errors;
        const errorList = errors.map((error, i) =>
            <li key={`error-${i}`}>
                {error}
            </li>
        );

        const none = () => (
            <>
            </>
        )

        const some = () => (
            <ul className="form-errors">{errorList}</ul>
        )

        return (this.state.errors.length > 0) ? some() : none()
    }

    render() {

        return (
            <>
                <NavContainer />
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
                            type="password"
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
                    <TasksContainer />
                    <Footer />
                </>
        )


    // render() {

    //     return (
    //         <>
    //             <NavContainer />
    //             <div>

    //             </div>
    //             <TasksContainer />
    //             <Footer />
    //         </>
    //     )
    }

}

export default Account;