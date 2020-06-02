import Maskers from "./maskers";
import { connect } from "react-redux";
import { fetchMaskers } from "../../actions/masker_actions"


const mSTP = state => {
    return {
    maskers: Object.values(state.entities.maskers)
    }
};

const mDTP = dispatch => {
    return {
        fetchMaskers: () => dispatch(fetchMaskers())
    }
};

export default connect(mSTP, mDTP)(Maskers);