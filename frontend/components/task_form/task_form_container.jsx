import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask, receiveTaskErrors } from '../../actions/task_actions'
// import { receiveMaskers } from '../../actions/masker_actions';
import { withRouter } from 'react-router-dom';



const mSTP = state => {
    return {
        tasks: Object.values(state.entities.tasks)
        // task: {
        //     category_id: 0,
        //     length_of_task: "",
        //     date: new Date(),
        //     time: "8:00am"
        //     per_hr: 1,
        //     user_id: state.session.id,
        //     masker_id: 0,
        //     description: "",
        //     start_address: "",
        //     end_address: "",
        //     vehicle_requirements: "",
        //     interest: ""
        // },
        // errors: errors.task
    }
    };


const mDTP = dispatch => {
    return {
        processForm: (task) => dispatch(createTask(task)),
        clearErrors: () => dispatch(receiveTaskErrors([]))
        // receiveMaskers: () => dispatch(receiveMaskers)
    };
};

export default withRouter(connect(mSTP, mDTP)(TaskForm));
