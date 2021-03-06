import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginPage from './login_page';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        fill: {
            email: '',
            password: ''
        }
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mSTP, mDTP)(LoginPage);