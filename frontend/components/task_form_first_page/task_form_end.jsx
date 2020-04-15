import React from 'react';

class TaskFormEnd extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            
        }


    }



    render() {
        const active = () => {
            <div className="form-end">
                <div className="form-header">END ADDRESS (OPTIONAL)</div>
                <div className="form-address">
                    <input className="address-bar"
                        type="text"
                        placeholder="Enter street address"
                    />
                    <input className="address-apt"
                        type="text"
                        placeholder="Unit or Apt #"
                    />
                </div>
                <button className="form-save-btn" type="submit">Save</button>
            </div>
        }


        return active;
    }
}

export default TaskFormEnd;