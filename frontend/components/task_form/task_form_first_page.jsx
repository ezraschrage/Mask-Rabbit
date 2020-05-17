import TaskFormInterest from '../task_form_first_page/task_form_interest';
import TaskFormStart from '../task_form_first_page/task_form_start';
import TaskFormEnd from '../task_form_first_page/task_form_end';
import TaskFormOptions from '../task_form_first_page/task_form_options';
import TaskFormNav from './task_form_nav'
import TaskFormDetails from '../task_form_first_page/task_form_details';
import React from 'react';

class TaskFormFirstPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {


        return (
            <div className="task-form-first-questions">
                <TaskFormInterest currentState={this.state}
                    handleSubmit={this.props.handleSubmit}
                    task={this.props.task}
                    update={this.props.update}
                    // {...props}
                    />
                <TaskFormStart 
                    currentState={this.state}
                    handleSubmit={this.props.handleSubmit}
                    task={this.props.task}
                    update={this.props.update}
                    // {...props}
                />
                <TaskFormEnd currentState={this.state}
                    handleSubmit={this.props.handleSubmit}
                    task={this.props.task}
                    update={this.props.update}
                    // {...props}
                    />
                <TaskFormOptions currentState={this.state}
                    handleSubmit={this.props.handleSubmit}
                    task={this.props.task}
                    update={this.props.update}
                    // {...props}
                    />
                <TaskFormDetails currentState={this.state}
                    handleSubmit={this.props.handleSubmit}
                    task={this.props.task}
                    update={this.props.update}
                    
                    // {...props}
                    />
            </div>
        )

    }
}

export default TaskFormFirstPage;