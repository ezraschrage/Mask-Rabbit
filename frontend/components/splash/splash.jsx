import React from 'react';
import NavContainer from '../nav/nav_container'

class Splash extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {

        return (
            <>
            <NavContainer />
            <p>Welcome to splash</p>
            </>

        );
    }
}

export default Splash;