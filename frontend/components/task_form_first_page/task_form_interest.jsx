import React from 'react';

class TaskFormInterest extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            interest: '',
            // active: true
        }

        // this.handleSubmit = this.handleSubmit.bind(this);
    }



    render() {
        return (
            <div className="form-interest">
                <div className="form-header">TASK INTEREST</div>
                <div className="form-question">What brings you here today?</div>
                <div className="form-interest-radio">Radio input here</div>
                <button className="form-save-btn" type="submit">Save</button>
            </div>
        )
        }
}

export default TaskFormInterest;