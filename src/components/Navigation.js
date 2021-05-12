import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navigation.css";



function Navigation(){
    let location =useLocation();
    console.log(location.pathname);

    return (
    <div className="nav">
        {location.pathname == '/' ? null : <Link to='/'>Home</Link>}
        <Link to='/'>LinkedIn</Link>
        <Link to='/'>CV</Link>
    </div>);
}

export default Navigation;