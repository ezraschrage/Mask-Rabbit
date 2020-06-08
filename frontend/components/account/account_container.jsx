import { connect } from 'react-redux';
import Account from './account';
import { withRouter } from 'react-router-dom'
import { updateUser, receiveSessionErrors, logout } from '../../actions/session_actions';

const mSTP = ({ session, errors, entities: { users } }) => {
    return {
        currentUser: users[session.id],
        errors: errors
    }
};
const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(updateUser(user)),
        clearErrors: () => dispatch(receiveSessionErrors([])),
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(mSTP, mDTP)(Account));