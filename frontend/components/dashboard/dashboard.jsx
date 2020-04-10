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
                <div className="dashboard">
                    <div className="dashboard search">
                        <div className="dashboard search txt">
                            <p className="txt large">Book your next task</p>
                            <div className="dashboard search bar">
                                <p>Here will go the search bar.</p>
                            </div>
                            <div className="categories container list">
                                <div className="categories">
                                    <p>List of categories here</p>
                                    <button className="txt">See more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default Dashboard;