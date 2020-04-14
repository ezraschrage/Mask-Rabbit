import React from 'react';

class TasksInterest extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            interest: '',
            active: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    render() {
        const active = () => {
            <div className="form-interest">
                <div className="form-header">TASK INTEREST</div>
                <div className="form-question">What brings you here today?</div>
                <div className="form-interest-radio">Radio input here</div>
                <button className="form-save-btn" type="submit">Save</button>
            </div>
        }
        const inactive = () => {
            <div className="form-interest">
                <div className="form-header">TASK INTEREST</div>
                <div className="form-question">What brings you here today?</div>
                <div className="form-interest-radio">Radio input here</div>
                <button className="form-save-btn" type="submit">Save</button>
            </div>
        }

        return (
            <>
            </>
        )
    }
}

export default TasksInterest;


