import React from 'react'
import { useLocation } from 'react-router-dom';

import "./Copyright.css";



function Copyright(){
    let location =useLocation();

    return (
    <div className="copy">
       <div>Copyright 2021. Sooyeon Park all rights reserved.</div>
    </div>);
}

export default Copyright;