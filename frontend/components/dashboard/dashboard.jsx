import React from 'react';
import NavContainer from '../nav/nav_container'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <>
                <NavContainer />
                <p>Welcome to dash</p>
            </>

        );
    }
}

export default Dashboard;