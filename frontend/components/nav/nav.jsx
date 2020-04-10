import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="nav">
        <Link to="/">
            <button className={"logo-long"}></button>
        </Link>
        <Link to="/tasks">
            <button className="nav-text">Contactless Tasks and Delivery</button>
        </Link>
        <Link to="/tasks">
            <button className="nav-text">Services Drop down here</button>
        </Link>   
        <Link to="/login">
            <button className="nav-text">Log in</button>
        </Link>
        <button className="btn">Become a Masker (coming soon!</button>
        </nav>
    );
    const personalNav = () => (
        <nav className="nav">
            <Link to="/">
                <button className={"logo-long"}></button>
            </Link>
            <Link to="/tasks">
                <button className="nav-text">Contactless Tasks and Delivery</button>
            </Link>
            <button className="nav-text gift">Free Credit (coming soon!)</button>
            <Link to="/tasks">
                <button className="nav-text">Book a Task</button>
            </Link>
            <Link to="/account">
                <button className="nav-text">My Tasks</button>
            </Link>
            <Link to="/account">
                <button className="nav-text">Account</button>
            </Link>
            <button className="btn">Become a Masker (coming soon!</button>
            <button className="btn" onClick={logout}>Log Out</button>
        </nav>
    );

    return currentUser ? personalNav() : sessionLinks();
};


export default Nav;