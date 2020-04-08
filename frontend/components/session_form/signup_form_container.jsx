import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        fill: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            zipcode: ''
        }
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mSTP, mDTP)(SignupForm);

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.sessionErrors,
//         formType: 'signup',
//         fill: {
//             first_name: '',
//             last_name: '',
//             email: '',
//             password: '',
//             zipcode: ''
//         }
//     };
// };
