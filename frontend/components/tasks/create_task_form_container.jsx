import TasksForm from "./tasks_form";
import { connect } from "react-redux";
import { createTask } from "../../actions/task_actions"

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Splash);
