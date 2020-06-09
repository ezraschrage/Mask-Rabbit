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
        if(ownTasks.length === 0){
            return <div className='header-tasks none'>You currently have no tasks.</div>
        }
        // console.log(this.props)
        return (
                <>
                    {ownTasks.map((task) => (
                        <TaskItem key={task.id} deleteTask={this.deleteTask} 
                            fetchMasker={this.props.fetchMasker} task={task}
                            masker={this.props.maskers}/>
                    ))}
                </>
        )
    }
}

export default TasksIndex;