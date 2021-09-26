import React from 'react';
import './About.css';
import ReactPlayer from 'react-player/vimeo'





function About() {

    


    return (
        <div className='About'>
            <div className='wrapper-about' style={{marginTop: 0, marginBottom: 0}}>
                <div className='react-player-wrapper' >
                    <ReactPlayer className='react-player'  url='https://vimeo.com/559020507' playing= {true} width='100%' height='100%'/>
                </div>    
            </div>
        </div>
    );
}

export default About;