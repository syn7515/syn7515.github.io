import React from 'react';
import './About.css';
import { Grid } from '@material-ui/core';
import Resume from '../document/Resume.pdf';
//import ReactPlayer from 'react-player/vimeo'





function About() {

    return (
        <div className='About'>
            {/*<div className='wrapper-about' style={{marginTop: 0, marginBottom: 0}}>
                <div className='react-player-wrapper' >
                    <ReactPlayer className='react-player'  url='https://vimeo.com/559020507' playing= {true} width='100%' height='100%'/>
                </div>    
            </div>*/}
            <div className='wrapper-shrinked' style={{paddingTop: 220, marginBottom: 150, marginTop:0}}>
                <Grid container rowSpacing={2.5} justifyContent='space-between'>
                    <Grid item xs={12} md={4}>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/about/sooyeon.jpg'} alt="sooyeon smiling" />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <div className='text-hello'>Hello, my name is Sooyeon [su-yi-un].<br/>You can call me Soo.</div>
                        <div className='text-self-intro'>I am a strategic, enthusiastic and well-rounded product designer with UX research and industrial design background.</div>
                        <div className='text-self-intro'>I like to experiment and learn about new technologies in my spare time. I've recently experimented with a variety of technologies, including React.js (which I used to create this portfolio! ), Arduino, 3D printing, Diagflow, basic machine learning coding with Google Colab, and 3D printing. These experiences help me to communicate with engineers and to assess a product's feasibility.</div>
                        <div className='text-self-intro'>I am also an avid fan of Dieter Ram’s design. I often make vintage Braun product illustrations.</div>
                        <a className='text-intro-link' href='https://www.linkedin.com/in/sooyeon-park-495934193/' target="_blank" rel="noopener noreferrer">Linkedin↗</a>
                        <a className='text-intro-link' href = {Resume} target = "_blank" rel="noopener noreferrer">Resume↗</a>
                    </Grid>
                </Grid>
            </div>
            <div className='copy-project'>Copyright 2022. Sooyeon Park all rights reserved.</div>
        </div>
    );
}

export default About;