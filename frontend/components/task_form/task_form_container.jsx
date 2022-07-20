import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask, receiveTaskErrors } from '../../actions/task_actions'
import { withRouter } from 'react-router-dom';


let today = new Date();
let month = (today.getMonth() + 1 < 9) ? "0" + (today.getMonth() + 1).toString() : (today.getMonth() + 1).toString();
let day = (today.getDate() < 10) ? "0" + today.getDate().toString() : today.getDate().toString();
let date = today.getFullYear().toString() + `-` + month + `-` + day;

const mSTP = state => {
    return {
        tasks: Object.values(state.entities.tasks),
        user: state.session.id,
        today: date,
        maskers: state.maskers
        }
    };


const mDTP = dispatch => {
    return {
        processForm: (task) => dispatch(createTask(task)),
        clearErrors: () => dispatch(receiveTaskErrors([]))
    };
};

export default withRouter(connect(mSTP, mDTP)(TaskForm));
