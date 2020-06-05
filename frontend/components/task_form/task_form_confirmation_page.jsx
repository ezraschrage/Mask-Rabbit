import React from 'react';

class TaskFormConfirmationPage extends React.Component {
    constructor (props) {
        super(props)

        this.confirmationButton = this.confirmationButton.bind (this)
    }

    confirmationButton(e) {
        e.preventDefault();
        if (this.props.state.description !== "") {
            this.props.addErrors([])
            this.props.history.push(`/account`);
            this.props.handleSubmit(e);
        } else {
            this.props.addErrors(["Please provide details"])
        }
    }

    render() {

        let dateArray = this.props.state.date.split('-')
        let date = new Date(parseInt(dateArray[0]), parseInt(dateArray[1])-1, 
            parseInt(dateArray[2]))
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let prettyDate = new Intl.DateTimeFormat('en-US',options).format(date)

        let presentEnd = this.props.state.end_address === "" ? </>

        return (
            <div className="task-form-third">
                <div className="form-confirmation-details">
                    <div className="confirmation-text">Review your task description</div>
                    <textarea className="form-description-input-confirmation" onChange={this.props.update('description')}
                        value={this.props.state.description}></textarea>
                    {this.props.renderErrors()}
                    <div className="confirmation-text margin">Don't worry, you won't be billed until your task is 
                        complete. Once confirmed, you can chat with your Tasker 
                        to update the details.</div>
                    <button className="form-save-btn" type="submit"
                        onClick={(e) => this.confirmationButton(e)} >Confirm </button>
                </div>
                <div className="form-confirmation-info">
                    <div className="confirmation-masker">
                        {/* <div>{this.props.state.}</div> */}
                    </div>
                    <div className="confirmation-details">
                        <div>Date: {prettyDate}</div>
                    </div>
                    <div className="confirmation-money">

                    </div>
                </div>

            </div>
        )
    }
};

export default TaskFormConfirmationPage;

<p>3rd page</p>
    