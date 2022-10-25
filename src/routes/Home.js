import React from 'react'
import Grid from '@material-ui/core/Grid';
import './Home.css';
import { Link } from 'react-router-dom';
import Resume from '../document/Resume.pdf';





function Home()  {



    return(
        <div className="Home" >
            <div className='wrapper-1'>
                <Grid container className='grid-container' spacing={4} style={{paddingTop: 120, marginBottom: 150}} direction='row' justify='flex-start' alignItems='flex-start'>
                    <Grid item xs={12}>
                        <div className='text-name'>A product designer with a solid UX research background.<br/>Currently studying M.S. Information at the University of Michigan.<br/>Previously worked at <a href="https://www.ringleplus.com/en/student/landing/home" target="_blank" rel="noopener noreferrer">Ringle</a>.</div>
                    </Grid>   
                </Grid>

                <Grid container className='grid-container'  spacing={4} rowSpacing={15} direction='row' justify='flex-start' alignItems='flex-start' style={{ marginBottom: 180}}>
                    <Grid  item  xs={12} sm={6}>
                        <Link to='/aline' className='link-item'>
                        <div>
                            <p className='text-item-name'>aline</p>
                            <p className='text-item-name-sub' >&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Financial service, 2020</p>
                            <img className="master-image"  src={process.env.PUBLIC_URL + '/assets/aline/aline_master.gif'} alt="master of aline" />
                        </div>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to='/flot' className='link-item'>
                        <div>
                            <p className='text-item-name'>flot</p>
                            <p className='text-item-name-sub'>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Online meeting service, 2020</p>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/flot/flot-master.jpg'} alt="master of flot" />
                        </div>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to='/scent' className='link-item'>
                        <div>
                            <p className='text-item-name'>scent</p>
                            <p className='text-item-name-sub'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furniture, 2018</p>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/scent/scent-master.jpg'} alt="master of scent" />
                        </div>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to='/hugo' className='link-item'>
                        <div>
                            <p className='text-item-name'>hugo</p>
                            <p className='text-item-name-sub'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conversational Agent, 2019</p>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/hugo/hugo-master.jpg'} alt="master of hugo" />
                        </div>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to='/stick-it' className='link-item'>
                        <div>
                            <p className='text-item-name'>stick-it</p>
                            <p className='text-item-name-sub'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Graphic, 2021</p>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/stickit/stick-it-master.jpg'} alt="master of stick-it" />
                        </div>
                        </Link>
                    </Grid>        
                </Grid>

                <div className='hyper-links' >
                    <a href='https://www.linkedin.com/in/sooyeon-park-495934193/' target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    <a href = {Resume} target = "_blank" rel="noopener noreferrer" style={{marginLeft: 20}}>RESUME</a>
                </div>
                <div className='copy-project'>Copyright 2022. Sooyeon Park all rights reserved.</div>
                
            </div>
        </div>
    );

}

export default Home;