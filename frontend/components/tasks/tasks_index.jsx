// import React from 'react';

// class TasksIndex extends React.Component {
//     constructor (props) {
//         super(props)
//     }

//     render () {
//         return (
//             <>
//             </>
//         )}
// }

// export default TasksIndex;

import React from 'react';
import { withRouter } from 'react-router-dom';
import TaskItem from './tasks_item';

class TasksIndex extends React.Component {
    constructor(props){
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(id){
        this.props.deleteTask(id).then(this.render());
    }

    componentDidMount() {
        this.props.fetchTasks(this.props.currentUser.id);
    }

    render(){
        const ownTasks = this.props.tasks;
        console.log(ownTasks)
        console.log(ownTasks[0])
        if(ownTasks.length === 0){
            return <div className='no-tasks'>You currently have no tasks.</div>
        }

        return (
            <div className='task-index-container'>
                <div>Your tasks</div>
                <ul className = 'user-task-list'>
                    {ownTasks.map((task) => (
                        <TaskItem key={task.id} deleteTask={this.deleteTask} task={task}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TasksIndex;