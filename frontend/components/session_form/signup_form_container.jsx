import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
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
        clearErrors: () => dispatch(receiveErrors([]))
    };
};

export default connect(mSTP, mDTP)(SignupForm);
