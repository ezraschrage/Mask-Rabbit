import TaskFormInterest from './task_form_interest';
import TaskFormStart from './task_form_start';
import TaskFormEnd from './task_form_end';
import TaskFormOptions from './task_form_options';
import TaskFormNav from '../task_form/task_form_nav'
import TaskFormDetails from './task_form_details';
import React from 'react';

class TaskFormFirstPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {


        return (
            <div className="task-form-first-questions">
                <TaskFormInterest />
                <TaskFormStart />
                <TaskFormEnd />
                <TaskFormOptions />
                <TaskFormDetails />
                <button type="submit" className="task-form-first-btn">
                    See Maskers and Prices
                </button>
            </div>
        )

    }
}

export default TaskFormFirstPage;