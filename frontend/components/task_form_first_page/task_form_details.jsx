import React from 'react';

class TaskFormDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        };
        
    }

    render() {

        return (
            <div className="form-details">
                <div className="form-header">TELL US THE DETAILS OF YOUR TASK</div>
                <div className="form-header">Start the conversation and tell your Masker what you need done.
                This helps us show you only qualified and available Maskers for the job.
                Don't worry, you can edit this later.</div>
                <div className="form-detail-input">
                    <textarea className="form-details-input" onChange={this.props.update('details')}
                        placeholder="Provide a summary of what you need done for your Masker. 
                    Be sure to include details like the size of your space, 
                    any equipment/tools needed, and how to get in."></textarea>
                </div>
                <div className="form-header">If you need two or more Maskers,
                    please post additional tasks for each Masker needed.
                </div>
                <div className="form-save">
                    <button className="form-save-btn" onClick={(e) => this.props.handleSubmit(e)}>
                        See Maskers and Prices
                    </button>
                </div>
            </div>
        )
        
        
    }
}

export default TaskFormDetails;
