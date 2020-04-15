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
                        <div className="form-nav-logo"></div>
                        <div className="form-nav-progress">
                            <div className="form-nav-step">
                                <div className="form-nav-step-top">
                                    <div className="form-nav-empty"></div>
                                    <div className="form-nav-num">1</div>
                                    <div className="form-nav-line"></div>
                                </div>
                                <div className="form-nav-bottom">
                                    <span>Describe your task</span>
                                </div>
                            </div>
                            <div className="form-nav-step">
                                <div className="form-nav-step-top">
                                    <div className="form-nav-line"></div>
                                    <div className="form-nav-num">2</div>
                                    <div className="form-nav-line"></div>
                                </div>
                                <div className="form-nav-bottom">
                                    <span>Brose Maskers & prcices</span>
                                </div>
                            </div>
                            <div className="form-nav-step">
                                <div className="form-nav-step-top">
                                    <div className="form-nav-line"></div>
                                    <div className="form-nav-num">3</div>
                                    <div className="form-nav-line"></div>
                                </div>
                                <div className="form-nav-bottom">
                                    <span>Choose date & time</span>
                                </div>
                            </div>
                            <div className="form-nav-step">
                                <div className="form-nav-step-top">
                                    <div className="form-nav-line"></div>
                                    <div className="form-nav-num">4</div>
                                    <div className="form-nav-empty"></div>
                                </div>
                                <div className="form-nav-bottom">
                                    <span>Confirm details</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-message"></div>
                </div>
            </>
        )
    }
}

export default TaskFormNav;