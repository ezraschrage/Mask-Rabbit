import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../actions/task_actions'



const mSTP = state => {
    return {
        task: {
            category_id: 0,
            length_of_task: 1,
            date: new Date(),
            per_hr: 1,
            user_id: state.session.id,
            masker_id: 0,
            description: "",
            start_address: "",
            end_address: "",
            vehicle_requirements: ""
        }
    }
    };


const mDTP = dispatch => {
    return {
        processForm: (task) => dispatch(createTask(task))
    };
};

export default connect(mSTP, mDTP)(TaskForm);
