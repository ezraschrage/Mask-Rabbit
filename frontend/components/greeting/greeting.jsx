import React from 'react';
import { Link } from 'react-router-dom';

// class Greeting extends React.Component {

//     constructor (props) {
//         super(props)

//     }


//     render() {
//         debugger
//     let display;
//     if (this.props.session.id === null) {
//         display = (
//         <nav className="greeting-login">
//             Welcome to the home page of MaskRabbit! This page under construction
//             <br/>
//             <Link to="/login">Log in</Link>
//         </nav>
//         ); 
//         } else {
//     display = (
//         <hgroup className="greeting-group">
//             <h2 className="greeting-name">Hi, {this.props.user.email}!</h2>
//             <button className="greeting-button" onClick={logout}>Log Out</button>
//         </hgroup>
//     )};

//     return (
//         <>
//         {display}
//         </>
//     )
//     }
// }



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="greeting">
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
    const personalGreeting = () => (
        <nav className="greeting">
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
        </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;