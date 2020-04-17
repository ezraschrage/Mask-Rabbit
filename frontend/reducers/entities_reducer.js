import { combineReducers } from "redux";
import users from "./users_reducer";
import categories from "./categories_reducer";
import tasks from "./tasks_reducer";

const entitiesReducer = combineReducers({
    users,
    categories,
    tasks
});

export default entitiesReducer;