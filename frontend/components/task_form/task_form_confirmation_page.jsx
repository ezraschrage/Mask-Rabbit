import React from 'react';

class TaskFormConfirmationPage extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <>
            <p>3rd page</p>
                <button className="form-save-btn" type="submit"
                    onClick={(e) => this.handleSubmit(e)} >Save</button>
            </>
        )
    }
};

export default TaskFormConfirmationPage;