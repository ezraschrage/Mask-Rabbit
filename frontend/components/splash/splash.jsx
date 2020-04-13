import React from 'react';
import Footer from '../footer/footer_component'
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
                    <div className="splash txt">
                        <span className="txt large">Help around the home, the safest possible way! </span>
                        <span className="txt small">You don't always have to DIY. Get help from thousands of trusted Maskers, all trained in PPE and social distancing techniques.</span>
                        <div className="splash bar">
                            <span className="search">Here will go the search bar.</span>
                            <button className="splash btn">Get help today</button>
                        </div>
                    </div>
                </div>
                <div className="reviews">
                    <div className="stars">
                        <div className="full-star"></div>
                        <div className="full-star"></div>
                        <div className="full-star"></div>
                        <div className="full-star"></div>
                        <div className="half-star"></div>
                        <span>1.1+ million reviews</span>
                    </div>
                    <div className="ikea">
                        <div className="ikea-img"></div>
                        <span>Partnered with IKEA</span>
                    </div>
                    <div className="apps">
                        <div className="google-app"></div>
                        <div className="app-store"></div>
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
            <Footer />
            </>

        );
    }
}

export default Splash;