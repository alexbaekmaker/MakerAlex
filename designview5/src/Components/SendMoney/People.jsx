import React from 'react';
import './SendMoney.css'


function People({ lastName, firstName, img }) {
    return (
        <div className="person">
            <img src={img} alt="" className="pfp2" />
            <p className="firstname">{firstName}</p>
            <p className="lastname">{lastName}</p>
        </div>
    )
    // each person of the list of people who money would be sent to using an image, their first name and last name, (these are also the parameters)
}
export default People;