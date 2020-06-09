import React from 'react';
import Masker from './masker';
import { withRouter } from 'react-router-dom';

class Maskers extends React.Component {

    constructor(props) {
        super(props)

        this.maskerButton = this.maskerButton.bind(this);
    }

    componentDidMount() {
        this.props.fetchMaskers()
    }

    maskerButton(e, id, price, url, fName, lName) {
        e.preventDefault();
        let appointment = this.props.state.date;
        let appointmentArray = appointment.split('-');
        let todayArray = this.props.state.today.split('-')

        if (appointmentArray[0] >= todayArray[0] && 
            appointmentArray[1] >= todayArray[1] &&
            appointmentArray[2] >= todayArray[2]) {
            this.props.addErrors([])
            this.props.changeStep(7, e)
            this.props.history.push(`/task/confirm`);
            this.props.updateMasker(id, price, url, fName, lName)
        } else {
            this.props.addErrors(["Please enter a valid date."])
        }
    }

    render () {
        const { maskers } = this.props;
        return (
            <div className="maskers-container">
                <ul className="maskers">
                    
                    {maskers.map(masker => (
                        <Masker masker={masker} key={masker.id} maskerButton={this.maskerButton}/>
                    ))}
                </ul>
            </div>
        )
    }

};

export default withRouter(Maskers);