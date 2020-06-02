import { combineReducers } from "redux";
import users from "./users_reducer";
import categories from "./categories_reducer";
import tasks from "./tasks_reducer";
import maskers from "./maskers_reducer";

const entitiesReducer = combineReducers({
    users,
    categories,
    tasks,
    maskers
});

export default entitiesReducer;