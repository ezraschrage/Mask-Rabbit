import React from 'react';
import { Link } from 'react-router-dom';

const TasksItem = props => (
    <li className="task-li">
        <div className="task-li-container">
            <ul>
                <li>{props.task.length_of_task}</li>
                <li>{props.task.date}</li>
                <li>{props.task.time}</li>
                <li>{props.task.per_hr}</li>
                <li>{props.task.masker_id}</li>
                <li>{props.task.description}</li>
                <li>{props.task.start_address}</li>
                <li>{props.task.end_address}</li>
                <li>{props.task.vehicle_requirements}</li>
                <li>{props.task.interest}</li>
            </ul>
        </div>
    </li>
)

export default TasksItem;