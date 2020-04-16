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
                    <label>
                        <input type="radio"
                            value="Small - Est. 1 hr"
                            className="length-radio" />
                         Small - Est. 1 hr
                    </label>
                    <label>
                        <input type="radio"
                            value="Medium - Est. 2-3 hrs"
                            className="length-radio" />
                         Medium - Est. 2-3 hrs
                    </label>
                    <label>
                        <input type="radio"
                            value="Large - Est. 4+ hrs"
                            className="length-radio" />
                         Large - Est. 4+ hrs
                    </label>
                </div>
                <div className="form-question-border">Vehicle Requirements</div>
                <div className="form-vehicle-radio">
                    <label>
                        <input type="radio"
                            value="Not needed for task"
                            className="vehicle-radio" />
                         Not needed for task
                    </label>
                    <label>
                        <input type="radio"
                            value="Task requires a car"
                            className="vehicle-radio" />
                         Task requires a car
                    </label>
                    <label>
                        <input type="radio"
                            value="Task requires a truck"
                            className="vehicle-radio" />
                         Task requires a truck
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