import React from 'react'
import './Aline.css';

function Aline() {
    return (
    <div className="Aline">
        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/master.png'} alt="master of aline"/>
    </div>);
}

export default Aline;