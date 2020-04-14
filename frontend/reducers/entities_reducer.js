import { combineReducers } from "redux";
import users from "./users_reducer";
import categories from "./categories_reducer";

const entitiesReducer = combineReducers({
    users,
    categories
});

export default entitiesReducer;