import React from 'react';
// import { withRouter } from "react-router";
import { Route, Redirect, Link, Switch, withRouter } from 'react-router-dom'
import TaskFormFirstPage from './task_form_first_page';
import TaskFormSecondPage from './task_form_second_page';
import TaskFormConfirmationPage from './task_form_confirmation_page';
import TaskFormNav from './task_form_nav';

class TaskForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
                step: 1,
                category_id: 1,
                length_of_task: "",
                date: new Date(),
                time: "",
                per_hr: 1,
                user_id: 1,
                masker_id: 1,
                description: "",
                start_address: "",
                end_address: "",
                vehicle_requirements: "",
                interest: "",
                errors: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.changeStep = this.changeStep.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.addErrors = this.addErrors.bind(this);
    }

    update(property) {
        switch (this.state.step) {
            case 6:
                this.props.history.push(`/task/price`);
                break;
            case 7:
                break;
            default:
                break;


//                     <Route exact path='/task/new' render={FormFirst} />
//                     <Route exact path='/task/date' render={FormSecond} />
//                     <Route exact path='/task/confirm' render={FormConfirm} />
        };
        if (property === "date") {
            return e => this.setState({
                [property]: Date.parse(e.target.value)
            });
        } else {
            return e => this.setState({
                [property]: e.target.value
            });
        }
    }


    renderErrors() {

        const errors = this.state.errors;
        const errorList = errors.map((error, i) =>
            <li key={`error-${i}`}>
                {error}
            </li>
        );
      
        const none = () => (
                <>
                </>
        )

        const some = () => (
            <ul className="form-errors">{errorList}</ul>
            )
        
        return (this.state.errors.length > 0) ? some() : none()
    }

    addErrors(errors) {
        this.setState({errors: errors})
    }

    componentWillUnmount() {
        return this.props.clearErrors();
    }

    changeStep(num, e) {
        e.preventDefault();
        return this.setState({step: num})
    }



    handleSubmit(e) {
        e.preventDefault();
        const task = Object.assign({}, this.state)
        this.props.processForm(task);
    }

    render() {
        
        const firstPageComp = () => {
            return (
            <TaskFormFirstPage state={this.state}
                update={this.update}
                changeStep={this.changeStep}
                renderErrors={this.renderErrors}
                addErrors={this.addErrors} />
            )

        }
        const secondPageComp = () => {
            return (
            <TaskFormSecondPage state={this.state}
                            update={this.update}
                            changeStep={this.changeStep}
                            renderErrors={this.renderErrors}
                            addErrors={this.addErrors}/>
            )
        }

        const thirdPageComp = () => {
            return (
            <TaskFormConfirmationPage state={this.state}
                handleSubmit={this.handleSubmit}
                task={this.props.task}
                update={this.update}
                changeStep={this.changeStep} />
            )
        }

        return (
            <>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit} className="task-form-box">
                        <TaskFormNav state={this.state}
                            changeStep={this.changeStep} />
                        <Switch>
                        <Route exact path='/task/new' render={firstPageComp} />
                        <Route exact path='/task/price' render={secondPageComp} />
                        <Route exact path='/task/confirm' render={thirdPageComp} />
                        {/* {(this.state.step < 6) ? <Route exact path='/task/new' render={firstPageComp} /> : 
                            (this.state.step === 6) ? <Route exact path='/task/price' render={secondPageComp} /> : <Route exact path='/task/confirm' render={thirdPageComp} />} */}
                        </Switch>
                   </form>
                
                </div>
            </>
        )
    }

}

export default withRouter(TaskForm);

{/* <Route exact path='/task/new' render={TaskDetails} />
    <Route exact path='/task/price' render={PickTasker} />
    <Route exact path='/task/confirm' render={ConfirmTask} /> */}