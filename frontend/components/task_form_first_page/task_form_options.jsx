import React from 'react';

class TaskFormOptions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        };

    }

    render() {
        return (
            <div className="form-options">
                <div className="form-header">TASK OPTIONS</div>
                <div className="form-question-border">How big is your task?</div>
                <div className="form-length-radio">
                    <form className="form-length-radio">
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
                    </form>
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
        )
    }
}

export default TaskFormOptions;