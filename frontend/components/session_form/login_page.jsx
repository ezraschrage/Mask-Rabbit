import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
    componentDidMount() {
        // const map = this.refs.map;
        // this.map = new google.maps.Map(map, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        // if (this.props.singleBench) {
        //     this.props.fetchBench(this.props.benchId);
        // } else {
        //     this.registerListeners();
        //     this.MarkerManager.updateMarkers(this.props.benches);
        // }
    }

    componentDidUpdate() {
        // if (this.props.singleBench) {
        //     const targetBenchKey = Object.keys(this.props.benches)[0];
        //     const targetBench = this.props.benches[targetBenchKey];
        //     this.MarkerManager.updateMarkers([targetBench]); //grabs only that one bench
        // } else {
        //     this.MarkerManager.updateMarkers(this.props.benches);
        // }
    }

    handleClick(coords) {
        // this.props.history.push({
        //     pathname: 'benches/new',
        //     search: `lat=${coords.lat}&lng=${coords.lng}`
        // });
    }

    render() {
        return (
                <div>
                    <h3>Log in or sign up with email</h3>
                    {/* <button onClick={this.navigagteLoginForm}>Log in</button>
                    <button onClick={this.navigagteSignupForm}>Sign up</button> */}
                <Link to="/login/email">Log in</Link>
                <Link to="/signup/password">Sign up</Link>
                </div>
        );
    }
}

export default (LoginPage);
