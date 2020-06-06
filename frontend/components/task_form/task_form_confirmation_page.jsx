import React from 'react';

class TaskFormConfirmationPage extends React.Component {
    constructor (props) {
        super(props)

        this.confirmationButton = this.confirmationButton.bind (this)
        this.editTaskButton = this.editTaskButton.bind (this)
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

    editTaskButton(e) {
        e.preventDefault();
        this.props.addErrors([])
        this.props.changeStep(1, e)
        this.props.history.push(`/task/new`);
    }

    render() {

        let dateArray = this.props.state.date.split('-')
        let date = new Date(parseInt(dateArray[0]), parseInt(dateArray[1])-1, 
            parseInt(dateArray[2]))
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let prettyDate = new Intl.DateTimeFormat('en-US',options).format(date)

        
        let notPresentEnd = ""

        let presentEnd = <div className="confirmation-info-text-container">
            <div className="confirmation-info-text-left">End Address: </div>
            <div className="confirmation-info-text-right"> {this.props.state.end_address} </div>
            </div>
        // console.log(this.props)
        let shortMaskerFirst = this.props.state.masker_first_name[0] + "."
        // console.log(this.props.state.masker_first_name)
        // console.log(shortMaskerFirst)
        let endAddress = (this.props.state.end_address === '') ? notPresentEnd : presentEnd
        // let addressDiv = <div>{endAdress} &nbsp; &nbsp;</div>
        // let presentEnd = this.props.state.end_address === "" ? 

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
                        <div className="Masker-name-confirm">{shortMaskerFirst} {this.props.state.masker_last_name}</div>
                        <img className="Masker-pic" src={this.props.state.masker_url} />
                    </div>
                    <div className="confirmation-info-text">
                        <div className="confirmation-info-text-container">
                            <div className="confirmation-info-text-left"> Date: </div>   
                            <div className="confirmation-info-text-right"> {prettyDate} </div>
                        </div>
                        <div className="confirmation-info-text-container">
                            <div className="confirmation-info-text-left">Start Address: </div> 
                            <div className="confirmation-info-text-right"> {this.props.state.start_address} </div>
                        </div>
                        {endAddress}
                        <div className="confirmation-info-text-container">
                            <div className="confirmation-info-text-left"> Job Size: </div> 
                            <div className="confirmation-info-text-right">{this.props.state.length_of_task}</div>
                        </div>
                        <div className="confirmation-info-text-container">
                            <div className="confirmation-info-text-left"> Vehicle: </div> 
                            <div className="confirmation-info-text-right">{this.props.state.vehicle_requirements}</div>
                        </div>
                        <div className="edit-task-button" onClick={(e) => this.editTaskButton(e)}
                        >Edit Task</div>
                    </div>
                    <div className="confirmation-money-text">
                        <div className="confirmation-money">
                            <div>Hourly Rate:</div>
                            <div>${this.props.state.per_hr}/hr</div>
                        </div>
                        <div className="confirmation-money-legal">
                            <div>A 15% Trust and Support fee is added to the Masker’s total rate.</div>
                            <div>You will not be billed until your task is complete. Tasks have a one-hour minimum. 
                                You can cancel or reschedule anytime. If you cancel your task within 24 hours of the 
                                scheduled start time, you may be billed a one-hour cancellation fee at 
                                the Masker's hourly rate.</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default TaskFormConfirmationPage;