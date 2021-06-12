import React from 'react';
import { makeStyles } from '@material-ui/core';
import './About.css';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ReactPlayer from 'react-player/vimeo'


const useStyles = makeStyles((theme) => ({
    divider: {
        // Theme Color, or use css color in quote
        background: 'black',
    },
}));


function About() {

    
    const classes = useStyles();


    return (
        <div className='About'>
            <div className='wrapper-about' style={{marginTop: 0, marginBottom: 0}}>
                <Grid container className='grid-container' direction='row' justify='space-between' alignItems='flex-start'>
                    <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginLeft:"-1px"}}/>
                    <Grid item className='grid-item' xs={12} sm={4} />
                    <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginRight:"-1px"}}/>
                    <Grid item className='grid-item' xs={12} sm={4} />
                    <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginRight:"-1px"}}/>
                    <Grid item className='grid-item' xs={12} sm={4} />
                    <Divider classes={{root : classes.divider}} orientation="vertical" flexItem='true' style={{marginRight:"-1px"}}/>
                    
                </Grid>
                <div className='react-player-wrapper' >
                    <ReactPlayer className='react-player'  url='https://vimeo.com/559020507' playing= {true} width='100%' height='100%'/>
                </div>    
            </div>
        </div>
    );
}

export default About;