import React from 'react';

class TaskFormStart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        };

    }
    render() {
        return (
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
        )
    }
}

export default TaskFormStart;