import React from 'react';
import Masker from './masker';
import { withRouter } from 'react-router-dom';

class Maskers extends React.Component {

    constructor(props) {
        super(props)

        this.maskerButton = this.maskerButton.bind(this);

    }

    // state = { this.state }
    // update = { this.update }
    // changeStep = { this.changeStep }
    // renderErrors = { this.renderErrors }
    // addErrors = { this.addErrors }

    componentDidMount() {
        this.props.fetchMaskers()
    }

    maskerButton(e, id) {
        e.preventDefault();
        let now = new Date()
        console.log(this.props.state.date)
        let reservation = new Date(this.props.state.date)
        if ((reservation.getDay() >= now.getDay()) && (reservation.getMonth() 
            >= now.getMonth()) && (reservation.getYear() >= now.getYear())) {
            this.props.addErrors([])
            this.props.changeStep(7, e)
            this.props.history.push(`/task/confirm`);
            return e => this.setState({
            [masker_id]: id, [per_hr]: this.props.state.masker.per_hr
            
        })
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

