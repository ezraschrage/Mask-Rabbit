import React from 'react';

// Here will go Masker

class TaskFormSecondPage extends React.Component {

    render () {
        return (
            <div className="task-form-second">
                <div className="form-date" >
                    <input type="date" className="date-pick"/>
                    <input type="text"/>
                </div>
                <div className="form-masker">
                    Mala
                </div>
            </div>
        )
    }

};

export default TaskFormSecondPage;