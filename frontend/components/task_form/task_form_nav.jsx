import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class TaskFormNav extends React.Component {
    constructor(props) {
        super(props)
        this.firstPageButton = this.firstPageButton.bind(this);
        this.secondPageButton = this.secondPageButton.bind(this);
    }

    firstPageButton(e) {
        e.preventDefault();
            this.props.changeStep(1, e);
            this.props.history.push(`/task/new`);
    }

    secondPageButton(e) {
        e.preventDefault();
            this.props.changeStep(6, e);
            this.props.history.push(`/task/price`);
    }


    render() {
        
        const firstPage = () => (
            <div className="form-nav">
                <div className="form-nav-top">
                    <div>
                    <Link to="/">
                        <div className="form-nav-logo">

                        </div>
                    </Link>
                    </div>
                    <div className="form-nav-progress">
                        <div className="form-nav-step">
                            <div className="form-nav-step-top">
                                <div className="form-nav-empty"></div>
                                <div className="form-nav-num active">
                                    <span>1</span>
                                </div>
                                <div className="form-nav-line"></div>
                            </div>
                            <div className="form-nav-bottom active">
                                <span> Describe your task</span>
                            </div>
                        </div>
                        <div className="form-nav-step">
                            <div className="form-nav-step-top">
                                <div className="form-nav-line"></div>
                                <div className="form-nav-num">
                                    <span>2</span>
                                </div>
                                <div className="form-nav-line"></div>
                            </div>
                            <div className="form-nav-bottom">
                                <span>Browse Maskers & Dates</span>
                            </div>
                        </div>
                        <div className="form-nav-step">
                            <div className="form-nav-step-top">
                                <div className="form-nav-line"></div>
                                <div className="form-nav-num">
                                    <span>3</span>
                                </div>
                                <div className="form-nav-empty"></div>
                            </div>
                            <div className="form-nav-bottom">
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
        );
        const secondPage = () => (
            <div className="form-nav">
                <div className="form-nav-top">
                    <Link to="/">
                        <div className="form-nav-logo">

                        </div>
                    </Link>
                    <div className="form-nav-progress">
                        <div className="form-nav-step active" onClick={(e) => this.firstPageButton(e)}>
                            <div className="form-nav-step-top">
                                <div className="form-nav-empty"></div>
                                <div className="form-nav-num active">
                                    <span> {`\u2713`} </span>
                                </div>
                                <div className="form-nav-line active"></div>
                            </div>
                            <div className="form-nav-bottom">
                                <span> Describe your task</span>
                            </div>
                        </div>
                        <div className="form-nav-step">
                            
                            <div className="form-nav-step-top">
                                <div className="form-nav-line active"></div>
                                <div className="form-nav-num active">
                                    <span>2</span>
                                </div>
                                <div className="form-nav-line"></div>
                            </div>
                            <div className="form-nav-bottom active">
                                <span>Browse Maskers & Dates</span>
                            </div>
                        </div>
                        <div className="form-nav-step">
                            <div className="form-nav-step-top">
                                <div className="form-nav-line"></div>
                                <div className="form-nav-num third">
                                    <span>3</span>
                                </div>
                                <div className="form-nav-empty"></div>
                            </div>
                            <div className="form-nav-bottom">
                                <span>Confirm details</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-bottom">
                    <div className="form-message">
                        <div className="form-message-shield"></div>
                        <div className="form-message-text">Here are the available Maskers.
                        See who you like and request your date and time.
                            </div>
                    </div>
                </div>
                <div className="form-bottom">
                    <div className="form-message blue">
                        
                        <div className="form-message-text">Maskers agree to follow all public health guidance and regulations to protect their health and yours.
                        </div>
                        <div className="form-message-cross"></div>
                    </div>
                </div>
            </div>
        );
        const thirdPage = () => (
            <div className="form-nav">
                <div className="form-nav-top">
                    <Link to="/">
                        <div className="form-nav-logo">

                        </div>
                    </Link>
                    <div className="form-nav-progress">
                        <div className="form-nav-step active" onClick={(e) => this.firstPageButton(e)}>

                            <div className="form-nav-step-top">
                                <div className="form-nav-empty"></div>
                                <div className="form-nav-num active">
                                    <span> {`\u2713`} </span>
                                </div>
                                <div className="form-nav-line active"></div>
                            </div>
                            <div className="form-nav-bottom">
                                <span> Describe your task</span>
                            </div>
                        </div>
                        <div className="form-nav-step active" onClick={(e) => this.secondPageButton(e)}>

                            <div className="form-nav-step-top">
                                <div className="form-nav-line active"></div>
                                <div className="form-nav-num active">
                                    <span> {`\u2713`} </span>
                                </div>
                                <div className="form-nav-line active"></div>
                            </div>
                            <div className="form-nav-bottom">
                                <span>Browse Maskers & Dates</span>
                            </div>
                        </div>
                        <div className="form-nav-step">
                            <div className="form-nav-step-top">
                                <div className="form-nav-line active"></div>
                                <div className="form-nav-num active">
                                    <span>3</span>
                                </div>
                                <div className="form-nav-empty"></div>
                            </div>
                            <div className="form-nav-bottom active">
                                <span>Confirm details</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-bottom">
                    <div className="form-message">
                        <div className="form-message-clipboard"></div>
                        <div className="form-message-text">You're almost done!
                        We just need a few more details to connect you with your Masker.
                            </div>
                    </div>
                </div>
            </div>
        );
        
        switch (this.props.state.step) {
            case 6:
                return secondPage();
            case 7:
                return thirdPage();
            default:
                return firstPage();
        }
    }
}

export default withRouter(TaskFormNav);