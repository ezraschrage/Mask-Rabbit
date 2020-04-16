import React from 'react';
import TaskFormFirstPage from '../task_form_first_page/task_form_first_page';
import TaskFormSecondPage from '../task_form_second_page/task_form_second_page';
import TaskFormConfirmationPage from '../task_form_confirmation_page/task_form_confirmation_page';
import TaskFormNav from './task_form_nav';

class TaskForm extends React.Component {


    render() {
        return (
            <div className="form-container">
                <TaskFormNav />
                <TaskFormFirstPage />
            </div>
        )
    }

}

export default TaskForm;