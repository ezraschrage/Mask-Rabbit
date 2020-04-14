import TasksFormDetails from "./tasks_form_details";
import { connect } from "react-redux";
import { createTask } from "../../actions/task_actions"

const mSTP = (state) => {
    return {}
};

const mDTP = dispatch => ({
    createTask: (task) => dispatch(createTask(task))
});

export default connect(mSTP, mDTP)();