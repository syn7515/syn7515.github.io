import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import './Home.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Copyright from '../components/Copyright';
import stickit from '../img/stick-it.png';
import scent from '../img/scent.png'




const useStyles = makeStyles((theme) => ({
    divider: {
        // Theme Color, or use css color in quote
        background: 'white',
        mixBlendMode: 'difference'
    },
}));

function Home()  {

    const classes = useStyles();
    const [BgImg, setBgImg] = useState(null);


    return(
        <div className="Home" style={{backgroundImage: "url("+BgImg+")"}}>
            <div className="wrapper" style={{marginTop: 0, marginBottom: 0}}>
            <Grid container className='grid-container' direction='row' justify='space-between' alignItems='flex-start'>
                <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginLeft:"-1px"}}/>
                <Grid item className='grid-item' xs={12} sm={4}>
                        <div style={{marginBottom: 25}}><Link className='text-category' to='/about'>SOOYEON PARK</Link></div>
                        <div className='text-main' >I am a senior student studying <a href='https://id.kaist.ac.kr' target="_blank" rel="noopener noreferrer" className='a_diff'> Industrial Design at KAIST</a>, interested in architecture and programming.</div>
                </Grid>
                <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginRight:"-1px"}}/>
                <Grid item className='grid-item' xs={12} sm={4}>
                    <div className='text-category'>PROJECTS</div>
                    <Grid container direction='row'>
                        <Grid item xs={6}>
                            
                            <Link className='link' to='/aline'>Aline</Link><br/>
                            <Link className='link' to='/' style={{color: 'gray'}}>Hugo</Link><br/>
                            <Link className='link' to='/' style={{color: 'gray'}}>Flot</Link><br/>
                            <Link className='link' to='/' style={{color: 'gray'}}>Voix</Link>
                            
                        </Grid>
                        <Grid item xs={6}>
                            <Link className='link' to='/' style={{color: 'gray'}}>Loopin</Link><br/>
                            <Link className='link' to='/scent'
                                onMouseEnter={() => setBgImg(scent)}
                                onMouseLeave={() => setBgImg(null)}>Scent</Link><br/>
                            <Link className='link' to='/' style={{color: 'gray'}} 
                                onMouseEnter={() => setBgImg(stickit)}
                                onMouseLeave={() => setBgImg(null)}> Stick-it </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginRight:"-1px"}}/>
                <Grid item className='grid-item' xs={12} sm={4} style={{marginBottom : 50}}>
                    <div className='text-category'>EXPERIENCE</div>
                    <Grid container direction='column' spacing={3}>
                        <Grid item><div className='text-main'>Internship at  <a href='https://ux.snu.ac.kr' target="_blank" rel="noopener noreferrer" className='a_diff'>UX lab</a><br/>2020.09 - 2020.10<br/>Research Assistant</div></Grid>
                        <Grid item><div className='text-main'>Internship at  Pavilion corp. <br/>2020.01 - 2020.02<br/>UI/UX design and branding</div></Grid>
                        <Grid item><div className='text-main'>Research at Urban Design Lab <br/>2019.07 - 2019.12<br/>Research on 'Development of a new housing form for the young generation in Korea'</div></Grid>
                    </Grid>
                </Grid>
                <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginRight:"-1px"}}/>
                
            </Grid>
            <Copyright/>
            </div>
        </div>
    );

}

export default Home;