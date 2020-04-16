import { combineReducers } from "redux";
import task from "./task_errors_reducer";
import session from "./session_errors_reducer";

export default combineReducers({
    session,
    task
});
