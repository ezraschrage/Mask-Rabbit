import TasksIndex from "./tasks_index";
import { connect } from "react-redux";
import { fetchTasks, deleteTask } from "../../actions/task_actions"

const mSTP = (state) => {
    return {
        tasks: Object.values(state.entities.tasks),
    };
};

const mDTP = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks()),
    deleteTask: taskId => dispatch(deleteTask(taskId))
});

export default connect(mSTP, mDTP)(TasksIndex);
