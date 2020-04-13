import React from 'react';
import NavContainer from '../nav/nav_container';
import CategoriesContainer from '../categories/categories_container';

class Splash extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {

        return (
            <>
            <NavContainer />
            <div className="splash container">
                <div className="splash search">
                    <div className="splash search txt">
                        <p className="txt large">Help around the home, at your fingertips </p>
                        <p className="txt small">You don't always have to DIY. Get help from thousands of trusted Taskers for everything from home repairs to cleaning.</p>
                        <div className="splash search bar">
                            <p>Here will go the search bar.</p>
                            <button>Get help today</button>
                        </div>
                    </div>
                </div>
                <div className="splash categories">
                    <h2>Popular projects near you</h2>
                    <div className="categories images">
                        <p>Here is where the categoreis will go.</p>
                        <CategoriesContainer />
                    </div>
                </div>
            </div>
            </>

        );
    }
}

export default Splash;