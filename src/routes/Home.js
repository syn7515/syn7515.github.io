import React from 'react'
import Grid from '@material-ui/core/Grid';

//import { useState } from 'react'

import './Home.css';
import { Link } from 'react-router-dom';
//import ReactPlayer from 'react-player/lazy'

function Home()  {

/* 
const [width_w, setWidth] = useState(window.innerWidth);
const [height_w, setHeight] = useState(window.innerHeight);
const [num, setNum] = useState(window.innerWidth*0.5625);

const updateWidthAndHeight = () => {
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);
  setNum(window.innerWidth*0.5625)

};

React.useEffect(() => {
  window.addEventListener("resize", updateWidthAndHeight);
  return () => window.removeEventListener("resize", updateWidthAndHeight);
});*/

  return (
    <div className="Home" >
      <Grid container direction='row' alignItems='flex-end'>
        <Grid container sm={12} md={11}  direction='column' justify='flex-start' spacing={5}>
          <Grid container style={{marginTop: 50}}  direction = 'row' spacing={2}>
            <Grid item sm={12} md={2}><div className='text-name'>Sooyeon Park</div></Grid>
            <Grid container sm={12} md={10}><Grid item ><div className='text-normal'>I am a senior student studing <a href='https://id.kaist.ac.kr'> Industrial Design</a> at KAIST<br/>also interested in architecture and programming</div></Grid></Grid>
          </Grid>
          <Grid container style={{marginTop: 100}} direction = 'row' spacing={2}>
            <Grid item sm={12} md={2}><div className='text-name'>Project</div></Grid>
            <Grid container sm={12} md={10} direction='row' spacing={5}>
              <Grid item>
                <Grid container direction='column'>
                  <Link className='link' to='/aline'>Aline</Link>
                  <Link className='link' to='/'>Hugo</Link>
                  <Link className='link' to='/'>Flot</Link>
                  <Link className='link' to='/'>Voix</Link>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='column'>
                  <Link className='link' to='/aline'>Loopin</Link>
                  <Link className='link' to='/'>Scent</Link>
                  <Link className='link' to='/'>something</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container style={{marginTop: 100}}  direction = 'row' spacing={2}>
            <Grid item sm={12} md={2}><div className='text-name'>Experience</div></Grid>
            <Grid container sm={12} md={10} direction='column' spacing={3}>
              <Grid item><div className='text-normal'>Internship at  UX lab <br/>2020.09 - 2020.10<br/>Research Assistant</div></Grid>
              <Grid item><div className='text-normal'>Internship at  Pavilion corp. <br/>2020.01 - 2020.02<br/>UI/UX design and branding</div></Grid>
              <Grid item><div className='text-normal'>Research at Urban Design Lab <br/>2019.07 - 2019.12<br/>Research on 'Development of a new housing form for the young generation in Korea'</div></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm={12} md={1} container direction='column'>
          <Grid item><div><a href=''>CV</a></div></Grid>
          <Grid item><div><a href=''>Linkedin</a></div></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
