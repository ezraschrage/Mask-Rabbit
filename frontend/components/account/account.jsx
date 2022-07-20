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
            errors: [],
            old_password: "",
            password: "",
            id: this.props.currentUser.id,
            updated: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.editButton = this.editButton.bind(this);
        this.addErrors = this.addErrors.bind(this);
        this.cancelButton = this.cancelButton.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });

    }

    addErrors(errors) {
        this.setState({ errors: errors})
    }

    componentWillUnmount() {
        this.setState({ updated: false, errors: []})
        
        return this.props.clearErrors();
    }

    editButton(e) {
        e.preventDefault();
        this.setState({
            updated: false, email: this.props.currentUser.email,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            zip: this.props.currentUser.zip, errors: [] })
        this.props.history.push('/account/edit')
        this.props.clearErrors();
    }

    cancelButton(e) {
        e.preventDefault();
        this.props.history.push('/account')
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.zip !== "" && this.state.first_name !== "" && 
        this.state.last_name !== "" && this.state.email !== "") {

            const user = Object.assign({}, {first_name: this.state.first_name, last_name: this.state.last_name,
            zip: this.state.zip, email: this.state.email, id: this.state.id});
            this.setState({ errors: []})
            this.props.processForm(user);
            if (Object.keys(this.props.errors.session).length === 0) {
                
                this.setState({ updated: true })
                
            }
            
        } else {
            this.props.clearErrors()
            this.addErrors(["Please fill out all fields before updating"])
        }
    }

    renderErrors() {
        if (this.state.errors !== 0) {
            const local = () => {
                return (
            <li key={`error-local`}>{this.state.errors[0]}</li>
                )}}
        return (
            <ul className="errors">
                {this.props.errors.session.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
                <li key={`error-local`}>{this.state.errors[0]}</li>
            </ul>
        );
    }

    render() {
        const noSuccess = () => {
        return (
            <>
            </>
        )
    }
        const success = () => {
            return (
                <>
                    <div className="success">Account successfully updated!</div>
                </>
            )
        }


        const messageEdit = (this.state.updated && Object.keys(this.props.errors.session).length === 0 
        && this.state.errors.length === 0) ? success() : noSuccess()
        const main = () => {
            return (
                <>
                    <div className="account-info-container">
                        <div className="header-edit">
                            Account
                            
                                <button className="account-btn" 
                                onClick={(e) => this.editButton(e)}>Edit</button>
                            
                        </div>
                        <ul className="account-info-list">
                            <li>Name: {this.state.first_name + " " + this.state.last_name}</li>
                            <li>Email: {this.state.email}</li>
                            <li>Zip: {this.state.zip}</li>
                        </ul>
                    </div>
                    <TasksContainer state={this.state}/>
                </>
            )
        }

        const edit = () => {
            return (
                <>
                    <div className="account-form">
                        <div>Account Edit</div>
                        <form onSubmit={this.handleSubmit} className="form-box edit-box">
                            <div className="text">First Name</div>
                            <input
                                type="text"
                                defaultValue={this.state.first_name}
                                onChange={this.update('first_name')}
                                className="edit"
                            />
                            <div className="text">Last Name</div>
                            <input
                                type="text"
                                defaultValue={this.state.last_name}
                                onChange={this.update('last_name')}
                                className="edit"
                            />
                            <div className="text">Email Address</div>
                            <input
                                type="text"
                                defaultValue={this.state.email}
                                onChange={this.update('email')}
                                className="edit"
                            />
                            <div className="text">Zip Code</div>
                            <input
                                type="text"
                                defaultValue={this.state.zip}
                                onChange={this.update('zip')}
                                className="edit"
                            />
                            {this.renderErrors()}
                            {messageEdit}
                            <div className="edit-button-container">
                                <button
                                    className="account-btn edit-btn"
                                    type="submit"
                                >Update
                                </button>
                                <button
                                    className="account-btn edit-btn"
                                    onClick={(e) => this.cancelButton(e)}
                                >Back
                                </button>
                            </div>
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
    }

}

export default withRouter(Account);