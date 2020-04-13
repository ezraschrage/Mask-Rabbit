import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="nav">
            <div className="logo-container">
            <Link to="/">
                <button className={"logo-nav"}></button>
            </Link>
            </div>
            <div className="nav-link-container">
                <Link to="/tasks">
                    <button className="nav-text">Contactless Tasks and Delivery</button>
                </Link>
                <Link to="/tasks">
                    <button className="nav-text btn">Book a Task</button>
                </Link>
                <div className="nav-text-gift">
                    <div className="gift"></div>
                    <div className="nav-text">Free Credit (coming soon!)</div>
                </div>
                <Link to="/login">
                    <button className="nav-text">Log in</button>
                </Link>
                <button className="nav big-btn">Become a Masker (coming soon!</button>
            </div>
        </nav>
    );
    const personalNav = () => (
        <nav className="nav">
            <div className="logo-container">
                <Link to="/">
                    <button className={"logo-nav"}></button>
                </Link>
            </div>
            <div className="nav-link-container">
                <Link to="/tasks">
                    <button className="nav-text">Contactless Tasks and Delivery</button>
                </Link>
                <Link to="/tasks">
                    <button className="nav-text btn">Book a Task</button>
                </Link>
                <div className="nav-text-gift">
                    <div className="gift"></div>
                    <div className="nav-text">Free Credit (coming soon!)</div>
                </div>
                <Link to="/account">
                    <button className="nav-text btn">My Tasks</button>
                </Link>
                <Link to="/account">
                    <button className="nav-text btn">Account</button>
                </Link>
            </div>
        </nav>
    );

    return currentUser ? personalNav() : sessionLinks();
};


export default Nav;