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
                <div className="form-interest-radio">
                    <label>
                        <input type="radio" 
                        value="I'm ready to book right now"
                        className="interest-radio"/>
                         I'm ready to book right now
                    </label>
                    <label>
                        <input type="radio" 
                        value="I'm interested in booking sometime soon"
                            className="interest-radio"/>
                         I'm interested in booking sometime soon
                    </label>
                    <label>
                        <input type="radio" 
                        value="I'm just browsing"
                            className="interest-radio"/>
                         I'm just browsing
                    </label>
                </div>
                <div className="form-save">
                    <button className="form-save-btn" type="submit">Save</button>
                </div>
            </div>
        )
        }
}





export default TaskFormInterest;

{/* <label><input type="radio" value="small" checked={this.state.size === 'small'} onChange={this.handleChange('size')} />Small - Est. 1 hr</ label>
    <label><input type="radio" value="medium" checked={this.state.size === 'medium'} onChange={this.handleChange('size')} />Medium - Est. 2-3 hrs</ label>
    <label><input type="radio" value="large" checked={this.state.size === 'large'} onChange={this.handleChange('size')} />Large - Est. 4+ hrs</ label> */}