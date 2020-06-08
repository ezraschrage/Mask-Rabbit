import React from 'react';
import TasksContainer from '../tasks/tasks_index_container';
import NavContainer from '../nav/nav_container';
import Footer from '../footer/footer_component';
import { Switch, Route, withRouter } from 'react-router-dom';

class Account extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: this.props.currentUser.email,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            zip: this.props.currentUser.zip,
            errors: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.editButton = this.editButton.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });

    }

    componentWillUnmount() {
        return this.props.clearErrors();
    }

    editButton(e) {
        e.preventDefault();
        this.props.history.push('account/edit')
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.props.history.push(`/account`);
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

        const main = () => {
            return (
                <>
                    <div className="account-info-container">
                        <div className="header-edit">
                            <div>Account</div>
                            <div>
                                <button className="account-btn" 
                                onClick={(e) => this.editButton(e)}>Edit</button>
                            </div>
                        </div>
                        <ul className="account-info-list">
                            <li>Name: {this.state.first_name + " " + this.state.last_name}</li>
                            <li>Email: {this.state.email}</li>
                            <li>Zip: {this.state.zip}</li>
                        </ul>
                    </div>
                    <TasksContainer />
                </>
            )
        }

        const edit = () => {
            return (
                <>
                    <div className="account-form">
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
                            {this.renderErrors()}
                            <button
                                className="btn submit"
                                type="submit"
                            >Edit Account
                            </button>
                        </form>
                    </div>
                </>
            )
        }

        return (
            <>
                <NavContainer />
                    <div className="account-container">
                        <Switch >
                            <Route exact path='/account/' render={main} />
                            <Route exact path='/account/edit' render={edit} />
                        </Switch>
                    </div>
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

export default withRouter(Account);