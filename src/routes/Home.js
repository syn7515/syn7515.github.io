import React from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import './Home.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    divider: {
        // Theme Color, or use css color in quote
        background: 'black',
    },
}));

function Home()  {

    const classes = useStyles();

    return(
        <div className="Home" style={{marginTop: 0, marginBottom: 0}}>
            <Grid container className='grid-container' direction='row' justify='space-between' alignItems='flex-start'>
                <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginRight:"-1px"}}/>
                <Grid item className='grid-item' xs={12} sm={4}>
                        <div className='text-category'>Sooyeon Park</div>
                        <div className='text-main' >I am a senior student studying <a href='https://id.kaist.ac.kr' target="_blank" rel="noopener noreferrer"> Industrial Design</a> at KAIST, also interested in architecture and programming.</div>
                </Grid>
                <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginRight:"-1px"}}/>
                <Grid item className='grid-item' xs={12} sm={4}>
                    <div className='text-category'>Project</div>
                    <Grid container direction='row'>
                        <Grid item xs={6}>
                            
                            <Link className='link' to='/aline'>Aline</Link><br/>
                            <Link className='link' to='/' style={{color: 'gray'}}>Hugo</Link><br/>
                            <Link className='link' to='/' style={{color: 'gray'}}>Flot</Link><br/>
                            <Link className='link' to='/' style={{color: 'gray'}}>Voix</Link>
                            
                        </Grid>
                        <Grid item xs={6}>
                            <Link className='link' to='/' style={{color: 'gray'}}>Loopin</Link><br/>
                            <Link className='link' to='/scent'>Scent</Link><br/>
                            <Link className='link' to='/' style={{color: 'gray'}}>Stick-it</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginRight:"-1px"}}/>
                <Grid item className='grid-item' xs={12} sm={4}>
                    <div className='text-category'>Experience</div>
                    <Grid container direction='column' spacing={3}>
                        <Grid item><div className='text-main'>Internship at  UX lab <br/>2020.09 - 2020.10<br/>Research Assistant</div></Grid>
                        <Grid item><div className='text-main'>Internship at  Pavilion corp. <br/>2020.01 - 2020.02<br/>UI/UX design and branding</div></Grid>
                        <Grid item><div className='text-main'>Research at Urban Design Lab <br/>2019.07 - 2019.12<br/>Research on 'Development of a new housing form for the young generation in Korea'</div></Grid>
                    </Grid>
                </Grid>
                <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginRight:"-1px"}}/>
                
            </Grid>
            
        </div>
    );

}

export default Home;