import React from 'react';
import Masker from './masker';

class Maskers extends React.Component {

    componentDidMount() {
        this.props.fetchMaskers()
    }

    render () {
        const { maskers } = this.props;
        return (
            <div className="maskers-container">
                <ul className="maskers">
                    
                    {maskers.map(masker => (
                        <CategoryItem masker={masker} key={masker.id}/>
                    ))}
                </ul>
            </div>
        )
    }

};

export default Maskers;

