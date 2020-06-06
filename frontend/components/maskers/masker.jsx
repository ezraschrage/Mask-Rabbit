import React from 'react';

const Masker = props => (
    <li className="Masker-li">
        <div className="Masker-left">
            <img className="Masker-pic" src={props.masker.photoUrl} />
            <div className="form-save">
                <button className="form-save-btn" type="submit"
                    onClick={(e) => props.maskerButton(e, props.masker.id, 
                        props.masker.price, props.masker.photoUrl,
                        props.masker.first_name, props.masker.last_name)}>Select & Continue</button>
            </div>
            {/* <div className="Masker-text">
                You can chat with your Masker, adjust task details, or change task time after booking.
            </div> */}
        </div>
        <div className="Masker-right">
            <div className="Masker-right-top">
                <div className="Masker-name">
                    {props.masker.first_name} {props.masker.last_name}
                </div>
                <div className="Masker-price">
                    ${props.masker.price}.00 / hour
                </div>
            </div>
            <div className="Masker-right-bottom">
                <p className="Masker-about">
                    About me
                </p>
                <p className="Masker-bio">
                    {props.masker.bio}
                </p>
            </div>
        </div>
    </li>
)

export default Masker;
