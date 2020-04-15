import React from 'react';

class TaskFormOptions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        };

    }

    render() {
        const active = () => {
            <div className="form-options">
                <div className="form-header">TASK OPTIONS</div>
                <div className="form-question">How big is your task?</div>
                <div className="form-length-radio">Radio input here</div>
                <div className="form-question">Vehicle Requirements</div>
                <div className="form-vehicle-radio">Radio input here</div>
                <button className="form-save-btn" type="submit">Save</button>
            </div>
        }


        return active;
    }
}

export default TaskFormOptions;