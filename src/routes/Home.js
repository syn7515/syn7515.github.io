import React from 'react'
import Grid from '@material-ui/core/Grid';
import './Home.css';
import { Link } from 'react-router-dom';







function Home()  {


    return(
        <div className="Home" >
            <div className='wrapper-1'>
                <Grid container className='grid-container' spacing={4} direction='row' justify='flex-start' alignItems='flex-start'>
                    <Grid item xs={12} sm={6}>
                        <div className='text-name'>sooyeon park</div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className='text-name'>UX design based<br/>Product planner</div>
                    </Grid>   
                </Grid>

                <Grid container className='grid-container'  spacing={4} rowSpacing={15} direction='row' justify='flex-start' alignItems='flex-start' style={{marginTop: 50, marginBottom: 180}}>
                    <Grid item xs={12} sm={6}>
                        <Link to='/aline' className='link-item'>
                        <div>
                            <p className='text-item-name'>aline</p>
                            <p className='text-item-name-sub'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Financial service, 2020</p>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/aline-master.jpg'} alt="master of aline" style={{marginTop: 14}}/>
                        </div>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to='/flot' className='link-item'>
                        <div>
                            <p className='text-item-name'>flot</p>
                            <p className='text-item-name-sub'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Online meeting service service, 2020</p>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/flot/flot-master.jpg'} alt="master of flot" style={{marginTop: 14}}/>
                        </div>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to='/scent' className='link-item'>
                        <div>
                            <p className='text-item-name'>scent</p>
                            <p className='text-item-name-sub'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furniture, 2018</p>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/scent/scent-master.jpg'} alt="master of scent" style={{marginTop: 14}}/>
                        </div>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to='/hugo' className='link-item'>
                        <div>
                            <p className='text-item-name'>hugo</p>
                            <p className='text-item-name-sub'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conversational Agent, 2019</p>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/hugo/hugo-master.jpg'} alt="master of hugo" style={{marginTop: 14}}/>
                        </div>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to='/stick-it' className='link-item'>
                        <div>
                            <p className='text-item-name'>stick-it</p>
                            <p className='text-item-name-sub'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Graphic, 2021</p>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/stickit/stick-it-master.jpg'} alt="master of stick-it" style={{marginTop: 14}}/>
                        </div>
                        </Link>
                    </Grid>        
                </Grid>
                <div className='copy-project'>Copyright 2021. Sooyeon Park all rights reserved.</div>
            </div>
        </div>
    );

}

export default Home;