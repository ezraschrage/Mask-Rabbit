import React from 'react';
import { Route, Redirect, Link, Switch, withRouter } from 'react-router-dom'
import TaskFormFirstPage from './task_form_first_page';
import TaskFormSecondPage from './task_form_second_page';
import TaskFormConfirmationPage from './task_form_confirmation_page';
import TaskFormNav from './task_form_nav';

class TaskForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
                step: 1,
                category_id: 1,
                length_of_task: "",
                date: this.props.today,
                time: "I'm flexible",
                per_hr: 1,
                user_id: this.props.user,
                masker_id: 1,
                description: "",
                start_address: "",
                end_address: "",
                vehicle_requirements: "",
                interest: "",
                errors: [],
                today: this.props.today,
                masker_first_name: "",
                masker_last_name: "",
                masker_url: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.changeStep = this.changeStep.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.addErrors = this.addErrors.bind(this);
        this.updateMasker = this.updateMasker.bind(this);
    }

    update(property) {
            return e => this.setState({
                [property]: e.target.value
            });
    }

    updateMasker(id, rate, url, fName, lName) {
        this.setState({masker_id: id, per_hr: rate, masker_url: url, masker_first_name: fName,
        masker_last_name: lName})
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

    addErrors(errors) {
        this.setState({errors: errors})
    }

    componentWillUnmount() {
        return this.props.clearErrors();
    }

    changeStep(num, e) {
        e.preventDefault();
        return this.setState({step: num})
    }



    handleSubmit(e) {
        e.preventDefault();
        const taskItems = { category_id: this.state.category_id, length_of_task: this.state.length_of_task,
            date: this.state.date, time: this.state.time, per_hr: this.state.per_hr, user_id: this.state.user_id,
            masker_id: this.state.masker_id, description: this.state.description, start_address: this.state.start_address,
            end_address: this.state.end_address, vehicle_requirements: this.state.vehicle_requirements, interest: this.state.interest}
        const task = Object.assign({}, taskItems)
        this.props.processForm(task);
        this.props.history.push(`/account`);
    }

    render() {
        
        const firstPageComp = () => {
            return (
            <TaskFormFirstPage state={this.state}
                update={this.update}
                changeStep={this.changeStep}
                renderErrors={this.renderErrors}
                addErrors={this.addErrors} />
            )

        }
        const secondPageComp = () => {
            return (
            <TaskFormSecondPage state={this.state}
                            update={this.update}
                            changeStep={this.changeStep}
                            renderErrors={this.renderErrors}
                            addErrors={this.addErrors}
                            updateMasker={this.updateMasker}/>
            )
        }

        const thirdPageComp = () => {
            return (
            <TaskFormConfirmationPage state={this.state}
                handleSubmit={this.handleSubmit}
                task={this.props.task}
                update={this.update}
                changeStep={this.changeStep}
                renderErrors={this.renderErrors}
                addErrors={this.addErrors}
                />
            )
        }

        return (
            <>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit} className="task-form-box">
                        <TaskFormNav state={this.state}
                            changeStep={this.changeStep} />
                        <Switch>
                            <Route exact path='/task/new' render={firstPageComp} />
                            <Route exact path='/task/price' render={secondPageComp} />
                            <Route exact path='/task/confirm' render={thirdPageComp} />
                        </Switch>
                   </form>
                
                </div>
            </>
        )
    }

}

export default withRouter(TaskForm);

