import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

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
        clearErrors: () => dispatch(receiveErrors([]))
    };
};

export default connect(mSTP, mDTP)(LoginForm);