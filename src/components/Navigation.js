import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navigation.css";
import Resume from '../document/Resume.v5.pdf';



function Navigation(){
    let location =useLocation();




    return (
    <div className="nav">
        {location.pathname === '/' || location.pathname === '/about' ? 
            <div className='topnav'><div className='grid-container'>
                <Link to='/'><div className='text-name-sooyeon'>Sooyeon Park</div></Link>
                <div className='taps'>
                    {location.pathname === '/' ?
                    <Link to='/'><div className='text-name-tap-underline'>work</div></Link> :
                    <Link to='/'><div className='text-name-tap'>work</div></Link>
                    }
                    {location.pathname === '/about' ?
                    <Link to='/about'><div className='text-name-tap-underline'>about</div></Link> :
                    <Link to='/about'><div className='text-name-tap'>about</div></Link>
                    }
                    <a href = {Resume} target = "_blank" rel="noopener noreferrer">resume</a>
                </div>
                </div>
            </div> 
            : <Link to='/' className='arrow' style={{paddingLeft:20}}>&#8592;</Link>}
    </div>);
}

export default Navigation;