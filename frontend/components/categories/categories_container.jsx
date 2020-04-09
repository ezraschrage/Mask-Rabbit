import Categories from "./categories";
import { connect } from "react-redux";


const mSTP = state => {
    return {

    }
};

const mDTP = dispatch => {
    return {
        receiveCategories: () => dispatch(receiveCategories())
    }
};

export default connect(mSTP, mDTP)(Categories);