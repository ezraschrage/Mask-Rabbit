import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask, receiveTaskErrors } from '../../actions/task_actions'



const mSTP = state => {
    return {
        task: {
            category_id: 0,
            length_of_task: "",
            date: new Date(),
            per_hr: 1,
            user_id: state.session.id,
            masker_id: 0,
            description: "",
            start_address: "",
            end_address: "",
            vehicle_requirements: "",
            interest: ""
        },
        errors: state.errors.task
    }
    };


const mDTP = dispatch => {
    return {
        processForm: (task) => dispatch(createTask(task)),
        clearErrors: () => dispatch(receiveTaskErrors([]))
    };
};

export default connect(mSTP, mDTP)(TaskForm);
