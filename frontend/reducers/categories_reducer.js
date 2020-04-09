import { RECEIVE_CATEGORIES} from "../actions/category_actions";

const categoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return Object.assign({}, state, action.categories);
        default:
            return state;
    }
}

export default categoriesReducer;
