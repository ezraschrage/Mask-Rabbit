import React from 'react';
import MaskersContainer from '../maskers/maskers_container';
import { withRouter } from 'react-router-dom';


class TaskFormSecondPage extends React.Component {

    constructor(props) {
        super(props)

    }

    render () {
        let today = new Date();
        let month = (today.getMonth() + 1 < 9) ? "0" + (today.getMonth() + 1).toString() : (today.getMonth() + 1).toString();
        let day = (today.getDate() < 10) ? "0" + today.getDate().toString() : today.getDate().toString();
        let date = today.getFullYear().toString() + `-` + month + `-` + day;

        return (
            <div className="task-form-second">

                <div className="form-date" >
                    <div className="form-date-message">
                        <div className="form-message-check_shield"></div>
                        <div className="form-date-message-text">Always have peace of mind. All Maskers undergo ID and criminal background checks.
                            </div>
                    </div>
                    <div className="date-box">
                        <div className="date-pick">
                            <div className="form-message-calendar"/>
                            <div className="form-date-text">TASK DATE</div>
                            <input type="date" className="date-picker"
                                min={date}
                                defaultValue = {date}
                                onChange={this.props.update('date')} />
                        </div>
                            
                            <div className="date-errors">
                                {this.props.renderErrors()}
                            </div>
                    </div>
                    
                    <div className="time-pick">
                        <div className="time-pick-text">TIME PREFERENCE</div>
                        <select className="time-pick-select"
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
                </div>


                <div className="form-masker">
                    <MaskersContainer state={this.props.state}
                        update={this.props.update}
                        changeStep={this.props.changeStep}
                        renderErrors={this.props.renderErrors}
                        addErrors={this.props.addErrors}
                        updateMasker={this.props.updateMasker}/>
                </div>
            </div>
        )
    }

};

export default withRouter(TaskFormSecondPage);