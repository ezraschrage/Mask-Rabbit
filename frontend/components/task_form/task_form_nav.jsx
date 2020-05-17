import React from 'react';
import { Link } from 'react-router-dom';


class TaskFormNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            

        };

    }


    render() {

        return (
            <>
                <div className="form-nav">
                    <div className="form-nav-top">
                        <Link to="/">
                            <div className="form-nav-logo">
                        
                            </div>
                        </Link>
                        <div className="form-nav-progress">
                            <div className="form-nav-step">
                                <div className="form-nav-step-top">
                                    <div className="form-nav-empty"></div>
                                    <div className="form-nav-num first">
                                        <span>1</span>
                                    </div>
                                    <div className="form-nav-line"></div>
                                </div>
                                <div className="form-nav-bottom first">
                                    <span> Describe your task</span>
                                </div>
                            </div>
                            <div className="form-nav-step">
                                <div className="form-nav-step-top">
                                    <div className="form-nav-line"></div>
                                    <div className="form-nav-num second">
                                        <span>2</span>
                                    </div>
                                    <div className="form-nav-line"></div>
                                </div>
                                <div className="form-nav-bottom second">
                                    <span>Browse Maskers & prices</span>
                                </div>
                            </div>
                            <div className="form-nav-step">
                                <div className="form-nav-step-top">
                                    <div className="form-nav-line"></div>
                                    <div className="form-nav-num third">
                                        <span>3</span>
                                    </div>
                                    <div className="form-nav-line"></div>
                                </div>
                                <div className="form-nav-bottom third">
                                    <span>Choose date & time</span>
                                </div>
                            </div>
                            <div className="form-nav-step">
                                <div className="form-nav-step-top">
                                    <div className="form-nav-line"></div>
                                    <div className="form-nav-num fourth">
                                        <span>4</span>
                                    </div>
                                    <div className="form-nav-empty"></div>
                                </div>
                                <div className="form-nav-bottom fourth">
                                    <span>Confirm details</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-bottom">
                        <div className="form-message">
                            <div className="form-message-notebook"></div>
                            <div className="form-message-text">Tell us about your task. 
                                We use these details to show Maskers in your area who fit your needs.
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default TaskFormNav;