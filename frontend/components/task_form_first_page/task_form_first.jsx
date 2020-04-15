import TaskFormInterest from '';
import TaskFormStart from '';
import TaskFormEnd from '';
import TaskFormOptions from '';
import TaskFormNav from '';
import TaskFormDetails from '';

class TaskFormFirst extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {


        return (
            <div className="task-form-first-container">
                <TaskFormNav />
                <div className="task-form-first-questions">
                    <TaskFormInterest />
                    <TaskFormStart />
                    <TaskFormEnd />
                    <TaskFormOptions />
                    <TaskFormDetails />
                    <button type="submit" className="task-form-first-btn">
                        See Maskers and Prices
                    </button>
                </div>
            </div>
        )

    }
}

export default TaskFormFirst