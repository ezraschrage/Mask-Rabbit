import React from 'react';
import { Link } from 'react-router-dom';

class TasksItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masker_first_name: this.props.masker.first_name,
            masker_last_name: "",
            masker_photourl: "",
            masker_bio: this.props.masker.bio
        }

        this.maskerInfo = this.maskerInfo.bind(this)
    }


    componentDidMount() {
        // console.log(this.props.task.masker_id)
    //     console.log(this.props)
        // this.props.fetchMasker(this.props.task.masker_id)
        // return this.setState({ masker_first_name: this.props.masker.first_name })
    //     // console.log(this.props.masker)
    //     // console.log(this.state)
    //     this.setState({
    //         masker_first_name: this.props.masker.first_name,
    //         masker_last_name: this.props.masker.last_name,
    //         masker_photourl: this.props.masker.photoUrl,
    //         masker_bio: this.props.masker.bio
    //     })
    //     console.log(this.state)
    }

    maskerInfo (masker_id) {

    //     // console.log(this.props.masker)
    //     // console.log(this.props.state)
    //     // if (this.props.props.maskers[masker_id] === undefined){
    //         this.props.fetchMasker(masker_id)
    //     // }
    //     // this.setState({ masker })
    //     this.setState({ masker_first_name: this.props.masker.first_name, 
    //         masker_last_name: this.props.masker.last_name, 
    //         masker_photourl: this.props.masker.photoUrl,
    //         masker_bio: this.props.masker.bio})
    //     console.log(this.props)
    //     console.log(this.state)
    }



    render() {
        
        // console.log(this.props)
        // console.log(this.state)
        // const mask = this.props.fetchMasker(this.props.task.masker_id)
        // console.log(mask)
        let dateArray = this.props.task.date.split('-')
        let date = new Date(parseInt(dateArray[0]), parseInt(dateArray[1]) - 1,
            parseInt(dateArray[2]))
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let prettyDate = new Intl.DateTimeFormat('en-US', options).format(date)
        console.log(this.props.masker)
        console.log(this.state)
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
        </div>
    )
    }
}

export default TasksItem;