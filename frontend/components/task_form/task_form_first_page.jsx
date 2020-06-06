import React from 'react';
import { withRouter } from 'react-router-dom';
// import { withRouter } from "react-router";

class TaskFormFirstPage extends React.Component {
    constructor(props) {
        super(props)
        
        this.interestButton = this.interestButton.bind(this);
        this.startButton = this.startButton.bind(this);
        this.endButton = this.endButton.bind(this);
        this.optionsButton = this.optionsButton.bind(this);
        this.descriptionButton = this.descriptionButton.bind(this);

    }

    

    interestButton(e) {
        e.preventDefault();
        if (this.props.state.interest !== "") {
            this.props.addErrors([])
            this.props.changeStep(2,e)
        } else {
            this.props.addErrors(["Please select an interest"])
        }
    }

    startButton(e) {
        e.preventDefault();
        if (this.props.state.start_address !== "") {
            this.props.addErrors([])
            this.props.changeStep(3,e)
        } else {
            this.props.addErrors(["Please input an address"])
        }
    }

    endButton(e) {
        e.preventDefault();
            this.props.addErrors([])
            this.props.changeStep(4,e)
    }

    optionsButton(e) {
        e.preventDefault();
        if (this.props.state.length_of_task !== "" && this.props.state.vehicle_requirements !== "") {
            this.props.addErrors([])
            this.props.changeStep(5,e)
        } else {
            let errors = [];
            if (this.props.state.length_of_task === "") { errors.push("Please select a length of task") }
            // if (this.props.state.length_of_task === "") { this.props.addErrors(["Please select a length of task"]) }
            if (this.props.state.vehicle_requirements === "") { errors.push("Please select a vehicle requirement") }
            // if (this.props.state.vehicle_requirements === "") { this.props.addErrors(["Please select a vehicle requirement"])}
            this.props.addErrors(errors);
        }
    }

    descriptionButton(e) {
        e.preventDefault();
        if (this.props.state.description !== "") {
            this.props.addErrors([])
            this.props.changeStep(6, e)
            this.props.history.push(`/task/price`);
        } else {
            this.props.addErrors(["Please provide details"])
        }
    }

    render () {
        
        const interestLong = () => {
            return (
                <>
                <div className="form-interest" >
                    <div className="form-header">TASK INTEREST</div>
                    <div className="form-question">What brings you here today?</div>
                    <div className="form-interest-radio">
                        <label className="radio-label">
                            <input type="radio"
                                name="form-interest"
                                value="I'm ready to book right now"
                                className="interest-radio"
                                checked={this.props.state.interest === "I'm ready to book right now"}
                                onChange={this.props.update('interest')}
                            />
                                &ensp;I'm ready to book right now
                            </label>
                        <label className="radio-label">
                            <input type="radio"
                                value="I'm interested in booking sometime soon"
                                className="interest-radio"
                                name="form-interest"
                                    checked={this.props.state.interest === "I'm interested in booking sometime soon"}
                                onChange={this.props.update('interest')}
                            />
                                &ensp;I'm interested in booking sometime soon
                            </label>
                        <label className="radio-label">
                            <input type="radio"
                                value="I'm just browsing"
                                className="interest-radio"
                                    checked={this.props.state.interest === "I'm just browsing"}
                                onChange={this.props.update('interest')}
                                name="form-interest" />
                                &ensp;I'm just browsing
                            </label>
                    </div>
                    
                        {this.props.renderErrors()}
                    
                    <div className="form-save">
                        <button className="form-save-btn" type="submit"
                                onClick={(e) => this.interestButton(e)} >Save</button>
                    </div>
                </div>
                </>
            )
        }

        const interestShort = () => {
            return (
                <>
                    <div className="form-interest short">
                        <div className="form-header">TASK INTEREST</div>
                    </div>
                </>
            )
        }

        const interestShortCompleted = () => {
            return (
                <>
                    <div className="form-interest active" onClick={(e) => this.props.changeStep(1, e)}>
                        <div className="form-header">TASK INTEREST</div>
                        <div className="completed">
                            <span > {`\u2713`} </span>
                            {this.props.state.interest}
                        </div>
                    </div>
                </>
            )
        }
        
        const startLong = () => {
            return (
                <>
                    <div className="form-start">
                        <div className="form-header">START ADDRESS</div>
                        <div className="form-address">
                            <input className="address-bar"
                                type="text"
                                placeholder="Enter street address"
                                value={this.props.state.start_address}
                                onChange={this.props.update('start_address')}
                            />
                            {/* <input className="address-apt"
                                type="text"
                                placeholder="Unit or Apt #"
                            /> */}
                        </div>
                        {this.props.renderErrors()}
                        <div className="form-save">
                            <button className="form-save-btn" type="submit"
                                onClick={(e) => this.startButton(e)}>Save</button>
                        </div>
                    </div>
                </>
            )
        }
        
        const startShort = () => {
           return (
                <>
                    <div className="form-start">
                        <div className="form-header">START ADDRESS</div>
                    </div>
                </>
            )
        }

        const startShortCompleted = () => {
            return (
                <>
                    <div className="form-start active" onClick={(e) => this.props.changeStep(2, e)}>
                        <div className="form-header">START ADDRESS</div>
                        <div className="completed">
                            <span> {`\u2713`} </span>
                            {this.props.state.start_address}
                        </div>
                    </div>
                </>
            )
        }

        const endLong = () => {
            return (
                <>
                    <div className="form-end">
                        <div className="form-header">END ADDRESS (optional)</div>
                        <div className="form-address">
                            <input className="address-bar"
                                type="text"
                                placeholder="Enter street address"
                                value={this.props.state.end_address}
                                onChange={this.props.update('end_address')}
                            />
                            {/* <input className="address-apt"
                                type="text"
                                placeholder="Unit or Apt #"
                            /> */}
                        </div>
                        <div className="form-save">
                            <button className="form-save-btn" type="submit"
                                onClick={(e) => this.endButton(e)}>Save</button>
                        </div>
                    </div>
                </>
            )
        }
        
        const endShort = () => {
           return (
                <>
                    <div className="form-end">
                        <div className="form-header">END ADDRESS (optional)</div>
                    </div>
                </>
            )
        }

        const endShortCompleted = () => {
            return (
                <>
                    <div className="form-end active" onClick={(e) => this.props.changeStep(3, e)}>
                        <div className="form-header">END ADDRESS (optional)</div>
                        <div className="completed">
                            <span> {`\u2713`} </span>
                            {this.props.state.end_address}
                        </div>
                    </div>
                </>
            )
        }
        
        const optionsLong = () => {
            return (
                <>
                    <div className="form-options">
                        <div className="form-header">TASK OPTIONS</div>
                        <div className="form-question-border">How big is your task?</div>
                        <div className="form-length-radio">

                            <label>
                                <input type="radio"
                                    value="Small - Est. 1 hr"
                                    className="length-radio"
                                    name="form-length"
                                    checked={this.props.state.length_of_task === "Small - Est. 1 hr"}
                                    onChange={this.props.update('length_of_task')}
                                />
                            &ensp;Small - Est. 1 hr
                        </label>
                            <label>
                                <input type="radio"
                                    value="Medium - Est. 2-3 hrs"
                                    className="length-radio"
                                    name="form-length"
                                    checked={this.props.state.length_of_task === "Medium - Est. 2-3 hrs"}
                                    onChange={this.props.update('length_of_task')}
                                />
                            &ensp;Medium - Est. 2-3 hrs
                        </label>
                            <label>
                                <input type="radio"
                                    value="Large - Est. 4+ hrs"
                                    className="length-radio"
                                    name="form-length"
                                    checked={this.props.state.length_of_task === "Large - Est. 4+ hrs"}
                                    onChange={this.props.update('length_of_task')}
                                />
                            &ensp;Large - Est. 4+ hrs
                        </label>

                        </div>
                        <div className="form-question-border">Vehicle Requirements</div>
                        <div className="form-vehicle-radio">
                            <label>
                                <input type="radio"
                                    value="Not needed for task"
                                    className="vehicle-radio"
                                    name="form-vehicle"
                                    checked={this.props.state.vehicle_requirements === "Not needed for task"}
                                    onChange={this.props.update('vehicle_requirements')}
                                />
                         &ensp;Not needed for task
                    </label>
                            <label>
                                <input type="radio"
                                    value="Task requires a car"
                                    className="vehicle-radio"
                                    name="form-vehicle"
                                    checked={this.props.state.vehicle_requirements === "Task requires a car"}

                                    onChange={this.props.update('vehicle_requirements')}
                                />
                         &ensp;Task requires a car
                    </label>
                            <label>
                                <input type="radio"
                                    value="Task requires a truck"
                                    className="vehicle-radio"
                                    name="form-vehicle"
                                    checked={this.props.state.vehicle_requirements === "Task requires a truck"}
                                    onChange={this.props.update('vehicle_requirements')}
                                />
                         &ensp;Task requires a truck
                    </label>
                        </div>
                        {this.props.renderErrors()}
                        <div className="form-save">
                            <button className="form-save-btn" type="submit"
                                onClick={(e) => this.optionsButton(e)} >Save</button>
                        </div>
                    </div>
                </>
            )
        }


        const optionsShort = () => {
            return (
                <>
                    <div className="form-options">
                        <div className="form-header">TASK OPTIONS</div>
                    </div>
                </>
            )
        }
        
        const optionsShortCompleted = () => {
            return (
                <>
                    <div className="form-options active" onClick={(e) => this.props.changeStep(4, e)}>
                        <div className="form-header">TASK OPTIONS</div>
                        <div className="completed">
                            <span> {`\u2713`} </span>
                            {this.props.state.length_of_task} <br/>
                            <span> {`\u2713`} </span>
                            {this.props.state.vehicle_requirements}
                        </div>
                    </div>
                </>
            )
        }
        
        const descriptionLong = () => {
            return (
                <>
                    <div className="form-description">
                        <div className="form-header">TELL US THE DETAILS OF YOUR TASK</div>
                        <div className="form-header">Start the conversation and tell your Masker what you need done.
                        This helps us show you only qualified and available Maskers for the job.
                        Don't worry, you can edit this later.</div>
                        <div className="form-detail-input">
                            <textarea className="form-description-input" onChange={this.props.update('description')}
                                placeholder="Provide a summary of what you need done for your Masker. 
                            Be sure to include description like the size of your space, 
                            any equipment/tools needed, and how to get in."
                                value={this.props.state.description}></textarea>
                        </div>
                        <div className="form-header">If you need two or more Maskers,
                        please post additional tasks for each Masker needed.
                    </div>
                        {this.props.renderErrors()}
                        <div className="form-save">
                            <button className="form-save-btn" type="submit"
                                onClick={(e) => this.descriptionButton(e)}>See Maskers and Prices</button>
                        </div>
                    </div>
                </>
            )
        }
        
        const descriptionShort = () => {
            return (
                <>
                    <div className="form-description">
                        <div className="form-header">TELL US THE DETAILS OF YOUR TASK</div>
                    </div>
                </>
            )
        }

        const descriptionShortCompleted = () => {
            return (
                <>
                    <div className="form-description active" onClick={(e) => this.props.changeStep(5, e)}>
                        <div className="form-header">TELL US THE DETAILS OF YOUR TASK</div>
                        <div className="completed">
                            <span> {`\u2713`} </span>
                            {this.props.state.description}
                        </div>
                    </div>
                </>
            )
        }

        return (
            <div className="task-form-first">

                {(this.props.state.step === 1) ? interestLong() : 
                    (this.props.state.interest === "") ? interestShort() : interestShortCompleted()}

                {(this.props.state.step === 2) ? startLong() :
                    (this.props.state.start_address === "") ? startShort() : startShortCompleted()}

                {(this.props.state.step === 3) ? endLong() :
                    (this.props.state.end_address === "") ? endShort() : endShortCompleted()}

                {(this.props.state.step === 4) ? optionsLong() :
                    ((this.props.state.vehicle_requirements === "") && (this.props.state.length_of_task === ""))? optionsShort() : optionsShortCompleted()}

                {(this.props.state.step === 5) ? descriptionLong() :
                    (this.props.state.description === "") ? descriptionShort() : descriptionShortCompleted()}
            </div>
        )

    }
}

export default withRouter(TaskFormFirstPage);