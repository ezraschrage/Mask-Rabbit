import React from 'react';

class TaskFormDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        };

    }

    render() {
        const active = () => {
            <div className="form-details">
                <div className="form-header">TELL US THE DETAILS OF YOUR TASK</div>
                <div className="form-header">Start the conversation and tell your Tasker what you need done. 
                    This helps us show you only qualified and available Taskers for the job. 
                    Don't worry, you can edit this later.</div>
                <textarea className="form-details" 
                    placeholder="Provide a summary of what you need done for your Tasker. 
                    Be sure to include details like the size of your space, 
                    any equipment/tools needed, and how to get in."></textarea>
                <div className="form-header">If you need two or more Taskers, 
                    please post additional tasks for each Tasker needed.</div>   
            </div>
        }


        return active;
    }
}

export default TaskFormDetails;

