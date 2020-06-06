import React from 'react';
import TasksContainer from '../tasks/tasks_index_container';
import NavContainer from '../nav/nav_container';
import Footer from '../footer/footer_component';

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
                <Footer />
            </>
        )
    }

}

export default Account;