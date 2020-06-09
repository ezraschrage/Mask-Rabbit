import {
    RECEIVE_MASKERS,
    RECEIVE_MASKER,
} from '../actions/masker_actions';

const maskersReducer = (state = {}, action) => {
    console.log(action)
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MASKERS:
            return Object.assign({}, state, action.maskers)
        case RECEIVE_MASKER:
            return Object.assign({}, state, action.masker )
        default:
            return state;
    }

};

export default maskersReducer;