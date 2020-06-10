import React from 'react';
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
        if(ownTasks.length === 0){
            return <div className='header-tasks none'>You currently have no tasks.</div>
        }
        return (
                <>
                <div className="header-tasks">Your tasks</div>

                    {ownTasks.reverse().map((task) => (
                        <TaskItem key={task.id} deleteTask={this.deleteTask} 
                            fetchMasker={this.props.fetchMasker} task={task}
                            masker={this.props.maskers}/>
                    ))}
                </>
        )
    }
}

export default TasksIndex;