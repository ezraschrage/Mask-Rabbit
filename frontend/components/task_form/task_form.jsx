import React from 'react';
import { Route, Redirect, Link, Switch } from 'react-router-dom'
import TaskFormFirstPage from '../task_form_first_page/task_form_first_page';
import TaskFormSecondPage from '../task_form_second_page/task_form_second_page';
import TaskFormConfirmationPage from '../task_form_confirmation_page/task_form_confirmation_page';
import TaskFormNav from './task_form_nav';

class TaskForm extends React.Component {
    constructor (props) {
        super(props)

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
        this.processForm(task);
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
                <div className="form-container">
                    <TaskFormNav />
                    <Route exact path='/task/new' render={FormFirst} />
                    <Route exact path='/task/date' render={FormSecond} />
                    <Route exact path='/task/confirm' render={FormConfirm} />
                    
                </div>
            </>
        )
    }

}

export default TaskForm;


    // this.state = {
    //     task: {
    //         category_id: 0,
    //         length_of_task:  1,
    //         date: new Date(),
    //         per_hr: 1,
    //         user_id: this.props.session.id, 
    //         masker_id: 0,
    //         description:  "",
    //         start_address:  "",
    //         end_address:  "",
    //         vehicle_requirements:  ""
    //     }
    // }
    // category_id: this.props.task.category_id || 0,
    //     length_of_task: this.props.task.length_of_task || 1,
    //         date: this.props.task.date || new Date(),
    //             per_hr: this.props.task.per_hr || 1,
    //                 user_id: this.props.session.id,
    //                     masker_id: this.props.task.masker_id || 0,
    //                         description: this.props.task.description || "",
    //                             start_address: this.props.task.start_address || "",
    //                                 end_address: this.props.task.end_address || "",
    //                                     vehicle_requirements: this.props.task.vehicle_requirements || ""

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleSubmit.bind(this);
    // this.handlePageSubmit = this.handlePageSubmit.bind(this);
