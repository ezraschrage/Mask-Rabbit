import Categories from "./categories";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions/category_actions"


const mSTP = state => {
    console.log(state)
    return {
    categories: Object.values(state.entities.categories)
    }
};

const mDTP = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
};

export default connect(mSTP, mDTP)(Categories);