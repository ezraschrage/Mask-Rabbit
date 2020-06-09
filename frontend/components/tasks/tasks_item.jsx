import React from 'react';
import { Link } from 'react-router-dom';

class TasksItem extends React.Component {
    constructor(props) {
        super(props);

        this.deleteButton = this.deleteButton.bind(this)
    }

    deleteButton(e) {
        e.preventDefault();
        this.props.deleteTask(this.props.task.id)
    } 

    render() {
        let dateArray = this.props.task.date.split('-')
        let date = new Date(parseInt(dateArray[0]), parseInt(dateArray[1]) - 1,
            parseInt(dateArray[2]))
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let prettyDate = new Intl.DateTimeFormat('en-US', options).format(date)
    return (
        <div className="task-li-container">
            <div>
                <div><u className="underline">Date</u>: {prettyDate}</div>
                <div> <u className="underline">Time</u>: {this.props.task.time}</div>
            </div>
            <div>
                
                <div><u className="underline">Task Description</u>: {this.props.task.description}</div>
                <div><u className="underline">Cost</u>: ${this.props.task.per_hr}/hr</div>
            </div>
            <div className="task-addresses">
                <div><u className="underline">Start Address</u>: {this.props.task.start_address}</div>
                <div><u className="underline">End Address</u>: {this.props.task.end_address}</div>
                <div><u className="underline">Vehicle requirements</u>: {this.props.task.vehicle_requirements}</div>
            </div>
            <div className="task-masker">
                <div className="task-masker-info">
                    <div><u className="underline">Your Masker</u>: {this.props.task.first_name} {this.props.task.last_name}</div>
                    <div><u className="underline">Bio</u>: {this.props.task.bio}</div>
                </div>
                <img className="Masker-pic-task" src={this.props.task.photoUrl} />
            </div>
            <div className="task-cancel">
                <button className="account-btn cancel" onClick={(e) => this.deleteButton(e)}>Cancel Task</button>
            </div>
        </div>
    )
    }
}

export default TasksItem;