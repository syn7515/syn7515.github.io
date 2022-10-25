import React from 'react'
import './Scent.css';
import Grid from '@material-ui/core/Grid';

function Scent() {



    return (
    <div className="Scent">
        <div className  = 'container' style={{marginTop:0, paddingTop:40}}>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/scent/master.png'} alt="master of scent"/>
        </div>

        <div className= 'container-shrinked-2'>
            <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start">
                <Grid item xs ={12} sm={6} style={{marginBottom: 30}}>
                    <div className='text-title'>Scent</div>
                    <div className='text-explanation'>stool inspired by scent</div>
                </Grid>
                <Grid item xs ={12} sm={6} style={{marginBottom: 30}}>
                    <div className = 'text-body'style={{marginTop: 0}}>Scent is a stool inspired by perfume layering. People can enjoy the aroma by putting aroma sheet into the slit at the bottom of stool. Also, multiple stools can be combined to create user’s own scent.</div>
                </Grid>
            </Grid>
        </div>

        <div className='container-shrinked-2' style={{marginTop:100}}>
            <Grid container spacing={3} direction='row' justify="flex-start" alignItems="flex-start">
                <Grid item xs ={6} sm={3} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Deliverable</div>
                    <div className='text-body'>Furniture Design<br/>Branding</div>
                </Grid>
                <Grid item xs ={6} sm={3} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Contribution</div>
                    <div className='text-body'>Personal Project (100%)</div>
                </Grid>
                <Grid item xs ={6} sm={3} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Patent</div>
                    <div className='text-body'>
                        <a href="https://doi.org/10.8080/1020190028367?urlappend=en" target="_blank" rel="noopener noreferrer">Korea Patent 10-2256746</a>
                    </div>
                </Grid>
                <Grid item xs ={6} sm={3} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Duration</div>
                    <div className='text-body'>2 months (2018.10 - 2018.12)</div>
                </Grid>
            </Grid>
        </div>

        

        

        
        
        <div className='container' style={{marginTop:200}}>
            <div className='text-subtitle'>Inspiration</div>
            <div className='text-body'>Perfume layering is a popular trend that can express individuality and a means of relieving stress through olfactory stimulation.  I borrowed idea of perfume layering to design chairs that can be used alone and by many people.</div>
            <img className='master-image' style={{marginTop: 40}} src={process.env.PUBLIC_URL + '/assets/scent/inspiration.gif'} alt="inspiration process"/>
        </div>
        <div className='container' style={{marginTop: 250}}>
            <div className='text-subtitle'>Combination</div>
            <div className='text-body'>Each stool borrowed a metaphorical concept from fragrance note. Scent can be zigzagged together to create various forms. The idea of combining stools comes from layered perfume.</div>
            <img className='master-image' style={{marginTop: 55}} src={process.env.PUBLIC_URL + '/assets/scent/combination.png'} alt="stool combination variations"/>
            <img className='master-image' style={{marginTop: 100}} src={process.env.PUBLIC_URL + '/assets/scent/fullshot.jpg'} alt="fullshot of scent"/>
            <img className='master-image' style={{marginTop: 20}} src={process.env.PUBLIC_URL + '/assets/scent/combination2.jpg'} alt="combined stool"/>
            <img className='master-image' style={{marginTop: 20}} src={process.env.PUBLIC_URL + '/assets/scent/top-view.jpg'} alt="combined stool top view"/>
        </div>
        <div className='container' style={{marginTop: 250}}>
            <img className='master-image' src={process.env.PUBLIC_URL + '/assets/scent/instruction.png'} alt="instruction paper of scent"/>
            <Grid container direction='row' style={{marginTop: 75}} spacing={2}>
                <Grid item xs={12} sm={6}><img className='master-image' src={process.env.PUBLIC_URL + '/assets/scent/process1.jpg'} alt="scent applying process1"/></Grid>
                <Grid item xs={12} sm={6}><img className='master-image' src={process.env.PUBLIC_URL + '/assets/scent/process2.jpg'} alt="scent applying process2"/></Grid>
            </Grid>
        </div>
        <div className='container' style={{marginTop: 250}}>
            <img className='master-image' src={process.env.PUBLIC_URL + '/assets/scent/part.png'} alt="aspects of scent"/>
        </div>

        <img className='master-image' style={{marginTop: 200, marginBottom: 200}} src={process.env.PUBLIC_URL + '/assets/scent/master-3.jpg'} alt="master shot"/>
        


        
       

        <div className='copy-project'>Copyright 2021. Sooyeon Park all rights reserved.</div>

    </div>);
}

export default Scent;