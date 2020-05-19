import React from 'react';
import { Route, Redirect, Link, Switch } from 'react-router-dom'
import TaskFormFirstPage from './task_form_first_page';
import TaskFormSecondPage from './task_form_second_page';
import TaskFormConfirmationPage from './task_form_confirmation_page';
import TaskFormNav from './task_form_nav';

class TaskForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
                step: 6,
                category_id: 1,
                length_of_task: "asd",
                date: new Date(),
                time: "I'm Flexible",
                per_hr: 1,
                user_id: 1,
                // user_id: state.session.id,
                masker_id: 1,
                description: "asd",
                start_address: "asd",
                end_address: "asd",
                vehicle_requirements: "asd",
                interest: "asd"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        
    }

    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }


    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        return this.props.clearErrors();
    }


    handleSubmit(e) {
        e.preventDefault();
        const task = Object.assign({}, this.state)
        this.props.processForm(task);
    }

    handlePageSubmit(e) {
        e.preventDefault();
    }

    handleComponentSubmit(e) {
        e.preventDefault();

    }

    render() {

        const FormFirst = (props) => {
            return (
                
            <TaskFormFirstPage currentState={this.state}
                handleSubmit={this.handleSubmit}
                task={this.props.task}
                update={this.update}
                {...props}
                
                />
            )
        }

        const FormSecond = (props) => {
            return(
                <TaskFormSecondPage currentState={this.state}
                    handleSubmit={this.handleSubmit}
                    task={this.props.task}
                    update={this.update}
                    {...props}/>)
        }

        const FormConfirm = (props) => {
            return (
                <TaskFormConfirmationPage currentState={this.state}
                    handleSubmit={this.handleSubmit}
                    task={this.props.task}
                    update={this.update}
                    {...props}/>
            )
        }
        
        return (
            <>
                <div className='task-type-error'>
                    {this.renderErrors()}
                </div>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit} className="form-box">
                        <TaskFormNav currentState={this.state}/>
                        <TaskFormFirstPage currentState={this.state}
                            handleSubmit={this.handleSubmit}
                            task={this.props.task}
                            update={this.update}/>
                        <TaskFormSecondPage
                            handleSubmit={this.handleSubmit}
                            task={this.props.task}
                            update={this.update} />
                        <TaskFormConfirmationPage />
                    </form>
                    {/* <Route exact path='/task/new' render={FormFirst} />
                    <Route exact path='/task/date' render={FormSecond} />
                    <Route exact path='/task/confirm' render={FormConfirm} /> */}
                    
                </div>
            </>
        )
    }

}

export default TaskForm;