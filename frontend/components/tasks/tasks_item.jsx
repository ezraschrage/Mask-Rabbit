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
        console.log(this.props.props.maskers[masker_id] === undefined)
        if (this.props.props.maskers[masker_id] === undefined){
            this.props.fetchMasker(masker_id)
        }
        // console.log(this.props)
        // console.log(this.state)
        // this.setState({ masker })
        // console.log(this.props.props)
        console.log(this.props)
        console.log(this.props.props.maskers[masker_id])
    }


    render() {
        // this.maskerInfo(this.props.task.masker_id)
        // console.log(this.props)
    return (
        <div className="task-li-container">
                {/* <div>{this.state.masker}</div> */}
                <div>{this.props.task.length_of_task}</div>
                <div>{this.props.task.date}</div>
                <div>{this.props.task.time}</div>
                <div>{this.props.task.per_hr}</div>
                <div>{this.props.task.masker_id}</div>
                <div>{this.props.task.description}</div>
                <div>{this.props.task.start_address}</div>
                <div>{this.props.task.end_address}</div>
                <div>{this.props.task.vehicle_requirements}</div>
                <div>{this.props.task.interest}</div>
           
        </div>
    )
    }
}

export default TasksItem;