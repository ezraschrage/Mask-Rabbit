import TasksIndex from "./tasks_index";
import { connect } from "react-redux";
import { fetchTasks, deleteTask } from "../../actions/task_actions"
import { fetchMasker } from "../../actions/masker_actions"

const mSTP = (state) => {
    // console.log(state)
    return {
        tasks: Object.values(state.entities.tasks),
        currentUser: state.entities.users,
        maskers: state.entities.maskers
    };
};

const mDTP = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks()),
    deleteTask: taskId => dispatch(deleteTask(taskId)),
    fetchMasker: userId => dispatch(fetchMasker(userId))
});

export default connect(mSTP, mDTP)(TasksIndex);
