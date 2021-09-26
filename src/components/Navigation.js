import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navigation.css";



function Navigation(){
    let location =useLocation();
    return (
    <div className="nav">
        {location.pathname === '/' ? null : <Link to='/'>&#8592;</Link>}
    </div>);
}

export default Navigation;