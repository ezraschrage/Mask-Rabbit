import React from 'react';

class TaskFormSecondPage extends React.Component {

    constructor(props) {
        super(props)


    }

    render () {
        return (
            <div className="task-form-second">
                <div className="form-date" >
                    <input type="date" className="date-pick"
                        placeholder = 'Select a date'
                        value = {this.props.state.date}
                        onChange={this.props.update('date')} />
                    <select className="time-pick"
                        onChange={this.props.update('time')}>

                        <option value="I'm Flexible">I'm Flexible</option>
                        <option value="8:00am">8:00am</option>
                        <option value="8:30am">8:30am</option>
                        <option value="9:00am">9:00am</option>
                        <option value="9:30am">9:30am</option>
                        <option value="10:00am">10:00am</option>
                        <option value="10:30am">10:30am</option>
                        <option value="11:00am">11:00am</option>
                        <option value="11:30am">11:30am</option>
                        <option value="12:00pm">12:00pm</option>
                        <option value="12:30pm">12:30pm</option>
                        <option value="1:00pm">1:00pm</option>
                        <option value="1:30pm">1:30pm</option>
                        <option value="2:00pm">2:00pm</option>
                        <option value="2:30pm">2:30pm</option>
                        <option value="3:00pm">3:00pm</option>
                        <option value="3:30pm">3:30pm</option>
                        <option value="4:00pm">4:00pm</option>
                        <option value="4:30pm">4:30pm</option>
                        <option value="5:00pm">5:00pm</option>
                        <option value="5:30pm">5:30pm</option>
                        <option value="6:00pm">6:00pm</option>
                        <option value="6:30pm">6:30pm</option>
                        <option value="7:00pm">7:00pm</option>
                        <option value="7:30pm">7:30pm</option>
                        <option value="8:00pm">8:00pm</option>
                        <option value="8:30pm">8:30pm</option>
                        <option value="9:00pm">9:00pm</option>
                        <option value="9:30pm">9:30pm</option>
                    </select>
                </div>
                <div className="form-masker">
                    Mala
                </div>
            </div>
        )
    }

};

export default TaskFormSecondPage;