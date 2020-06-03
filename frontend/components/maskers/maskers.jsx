import React from 'react';
import Masker from './masker';

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

    maskerButton(e) {
        e.preventDefault();
        if (Date.parse(this.props.state.date) >= Date.now ) {
            this.props.addErrors([])
            this.props.changeStep(7, e)
            this.props.history.push(`/task/confirm`);
        } else {
            this.props.addErrors(["Please provide details"])
        }
    }

    render () {
        const { maskers } = this.props;
        return (
            <div className="maskers-container">
                <ul className="maskers">
                    
                    {maskers.map(masker => (
                        <Masker masker={masker} key={masker.id}/>
                    ))}
                </ul>
            </div>
        )
    }

};

export default Maskers;

