import Maskers from "./maskers";
import { connect } from "react-redux";
import { fetchMaskers } from "../../actions/masker_actions"
import { withRouter } from 'react-router-dom';




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

export default withRouter(connect(mSTP, mDTP)(Maskers))