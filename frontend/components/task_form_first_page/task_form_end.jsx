import React from 'react';

class TaskFormEnd extends React.Component {
    constructor(props) {
        super(props)
        
    }



    render() {
        return (
            <div className="form-end">
                <div className="form-header">END ADDRESS (OPTIONAL)</div>
                <div className="form-address">
                    <input className="address-bar"
                        type="text"
                        placeholder="Enter street address"
                        onChange={this.props.update('details')}
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

export default TaskFormEnd;