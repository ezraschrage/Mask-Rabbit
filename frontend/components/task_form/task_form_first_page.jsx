import React from 'react';

class TaskFormFirstPage extends React.Component {
    constructor(props) {
        super(props)

        this.interestButton = this.interestButton.bind(this);
    }

    interestButton(e) {
        e.preventDefault();
        if (this.props.state.interest !== "") {
            this.props.addErrors([])
            this.props.changeStep(2,e)
        } else {
            this.props.addErrors(["Please select an interest", "Please add antoher thing", "No please, keep going"])
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
                    <div className="form-interest short" onClick={(e) => this.props.changeStep(1, e)}>
                        <div className="form-header">TASK INTEREST</div>
                        <div>
                        <span> {`\u2713`} </span> 
                        {this.props.state.interest}
                    </div>
                    </div>
                </>
            )
        }
        
        const startLong = () => {
            return (
                <>
                </>
            )
        }
        
        const startShort = () => {
            return (
                <>
                </>
            )
        }
        
        const endLong = () => {
            return (
                <>
                </>
            )
        }
        
        const endShort = () => {
            return (
                <>
                </>
            )
        }
        
        const optionsShort = () => {
            return (
                <>
                </>
            )
        }
        
        const optionsLong = () => {
            return (
                <>
                </>
            )
        }
        
        const deailsShort = () => {
            return (
                <>
                </>
            )
        }
        
        const detailsLong = () => {
            return (
                <>
                </>
            )
        }
        
        return (
            <div className="task-form-first">

                {/* form interest */}
                
                    
                    {(this.props.state.step === 1) ? interestLong() : interestShort()}
                

                {/* Start address */}

                <div className="form-start">
                    <div className="form-header">START ADDRESS</div>
                    <div className="form-address">
                        <input className="address-bar"
                            type="text"
                            placeholder="Enter street address"
                            onChange={this.props.update('address')}
                        />
                        <input className="address-apt"
                            type="text"
                            placeholder="Unit or Apt #"
                        />
                    </div>
                    <div className="form-save">
                        <button className="form-save-btn" type="submit">Save</button>
                    </div>
                </div>

                {/* End address */}

                <div className="form-end">
                    <div className="form-header">END ADDRESS (OPTIONAL)</div>
                    <div className="form-address">
                        <input className="address-bar"
                            type="text"
                            placeholder="Enter street address"
                            onChange={this.props.update('description')}
                        />
                        <input className="address-apt"
                            type="text"
                            placeholder="Unit or Apt #"
                        />
                    </div>
                    <div className="form-save">
                        <button className="form-save-btn" type="submit">Save</button>
                    </div>
                </div>

                {/* Options */}

                <div className="form-options">
                    <div className="form-header">TASK OPTIONS</div>
                    <div className="form-question-border">How big is your task?</div>
                    <div className="form-length-radio">
                        
                            <label>
                                <input type="radio"
                                    value="Small - Est. 1 hr"
                                    className="length-radio"
                                    name="form-length"
                                    onChange={this.props.update('length_of_task')}
                                />
                            &ensp;Small - Est. 1 hr
                        </label>
                            <label>
                                <input type="radio"
                                    value="Medium - Est. 2-3 hrs"
                                    className="length-radio"
                                    name="form-length"
                                    onChange={this.props.update('length_of_task')}
                                />
                            &ensp;Medium - Est. 2-3 hrs
                        </label>
                            <label>
                                <input type="radio"
                                    value="Large - Est. 4+ hrs"
                                    className="length-radio"
                                    name="form-length"
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
                                onChange={this.props.update('vehicle_requirements')}
                            />
                         &ensp;Not needed for task
                    </label>
                        <label>
                            <input type="radio"
                                value="Task requires a car"
                                className="vehicle-radio"
                                name="form-vehicle"
                                onChange={this.props.update('vehicle_requirements')}
                            />
                         &ensp;Task requires a car
                    </label>
                        <label>
                            <input type="radio"
                                value="Task requires a truck"
                                className="vehicle-radio"
                                name="form-vehicle"
                                onChange={this.props.update('vehicle_requirements')}
                            />
                         &ensp;Task requires a truck
                    </label>
                    </div>
                    <div className="form-save">
                        <button className="form-save-btn" type="submit">Save</button>
                    </div>
                </div>

                {/* form details */}
                <div className="form-details">
                    <div className="form-header">TELL US THE DETAILS OF YOUR TASK</div>
                    <div className="form-header">Start the conversation and tell your Masker what you need done.
                        This helps us show you only qualified and available Maskers for the job.
                        Don't worry, you can edit this later.</div>
                    <div className="form-detail-input">
                        <textarea className="form-details-input" onChange={this.props.update('description')}
                            placeholder="Provide a summary of what you need done for your Masker. 
                            Be sure to include details like the size of your space, 
                            any equipment/tools needed, and how to get in."></textarea>
                    </div>
                    <div className="form-header">If you need two or more Maskers,
                        please post additional tasks for each Masker needed.
                    </div>
                    <div className="form-save">
                        <button className="form-save-btn" type="submit">Save</button>
                        {/* <button className="form-save-btn" onClick={(e) => this.props.handleSubmit(e)}>
                            See Maskers and Prices
                    </button> */}
                    </div>
                </div>




            </div>
        )

    }
}

export default TaskFormFirstPage;