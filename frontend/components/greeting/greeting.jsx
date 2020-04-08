import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="greeting-login">
            Welcome to the home page of MaskRabbit! This page under construction
            <br/>
            <Link to="/login">Log in</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="greeting-group">
            <h2 className="greeting-name">Hi, {currentUser.email}!</h2>
            <button className="greeting-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;