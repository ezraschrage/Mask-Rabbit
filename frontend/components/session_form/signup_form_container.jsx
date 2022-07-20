import { connect } from 'react-redux';
import { signup, receiveSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(receiveSessionErrors([]))
    };
};

export default connect(mSTP, mDTP)(SignupForm);
