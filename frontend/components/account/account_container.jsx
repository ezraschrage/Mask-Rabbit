import { connect } from 'react-redux';
import { Account } from './account';
import { updateUser, receiveSessionErrors, logout } from '../../actions/session_actions';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};
const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(updateUser(user)),
        clearErrors: () => dispatch(receiveSessionErrors([])),
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(Account);