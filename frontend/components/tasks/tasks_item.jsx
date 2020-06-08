import React from 'react';
import { Link } from 'react-router-dom';

class TasksItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masker_first_name: "",
            masker_last_name: "",
            masker_photo_url: ""
        }

        this.maskerInfo = this.maskerInfo.bind(this)
    }

    componentDidMount() {
        // console.log(this.props.task.masker_id)
        this.maskerInfo(this.props.task.masker_id)
    }

    maskerInfo (masker_id) {
        // if (this.props.props.maskers[masker_id] === undefined){
            this.props.fetchMasker(masker_id)
        // }
        // this.setState({ masker })
        this.setState({ masker_first_name: this.props.masker })
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
                <div><u>Date:</u> {prettyDate}</div>
                <div> <u>Time:</u> {this.props.task.time}</div>
            </div>
            <div>
                
                <div><u>Task Description:</u> {this.props.task.description}</div>
                <div><ul>Cost:</ul> ${this.props.task.per_hr}/hr</div>
            </div>
            <div>
                <div><ul>Start Address:</ul> {this.props.task.start_address}</div>
                <div><ul>End Address:</ul> {this.props.task.end_address}</div>
                <div><ul>Vehicle requirements:</ul> {this.props.task.vehicle_requirements}</div>
            </div>
            <div>
                <div><ul>Your Masker:</ul> {this.props.masker.first_name} {this.props.masker.last_name}</div>
                <img className="Masker-pic-task" src={this.props.masker.photoUrl} />
            </div>
        </div>
    )
    }
}

export default TasksItem;