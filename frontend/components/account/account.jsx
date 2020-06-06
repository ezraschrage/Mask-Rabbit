import React from 'react';
import TasksContainer from '../tasks/tasks_index_container';
import NavContainer from '../nav/nav_container';

class Account extends React.Component {
    constructor (props) {
        super(props)
    }




    render() {

        return (
            <>
                <NavContainer />
                <div></div>
                <TasksContainer />
            </>
        )
    }

}

export default Account;