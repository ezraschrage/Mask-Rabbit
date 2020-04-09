import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import categoriesReducer from "./categories_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    categories: categoriesReducer
});

export default entitiesReducer;

/*


import { combineReducers } from "redux";

import benches from "./benches_reducer";
import reviews from "./reviews_reducer";
import users from "./users_reducer";

export default combineReducers({
  benches,
  reviews,
  users,
});


*/

