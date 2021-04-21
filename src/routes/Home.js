import React, { useState } from 'react'
import './Home.css';
import ReactPlayer from 'react-player/lazy'

function Home()  {

const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);
const [num, setNum] = useState((height-width*0.5625)/2);

const updateWidthAndHeight = () => {
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);
  setNum((height-width*0.5625)/2);
};

React.useEffect(() => {
  window.addEventListener("resize", updateWidthAndHeight);
  return () => window.removeEventListener("resize", updateWidthAndHeight);
});

  return (
    <div className="Home">
      <div className='full-screen'>
        <div  className='player-wrapper' style={{ marginTop: `${num}px` }} >
          <ReactPlayer className='react-player'
            url='https://www.dailymotion.com/video/x80e0v4' 
            playing= {true} muted = {true}
            width='100%' height='100%'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
