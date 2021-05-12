import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navigation.css";



function Navigation(){
    let location =useLocation();
    console.log(location.pathname);

    return (
    <div className="nav">
        {location.pathname === '/' ? null : <Link to='/'>Home</Link>}
        <a href='https://www.linkedin.com/in/%EC%88%98%EC%97%B0-%EB%B0%95-495934193/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <Link to='/'>CV</Link>
    </div>);
}

export default Navigation;