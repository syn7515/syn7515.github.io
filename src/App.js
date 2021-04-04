import React from 'react'
import './App.css';
import ReactPlayer from 'react-player/lazy'


function App() {
  return (
    <div className="App">
      <div>
        <div className='player-wrapper'>
        <ReactPlayer className='react-player'
          url='https://www.dailymotion.com/video/x80dy7b' 
          loop='true' playing='true' muted = 'true'
          width='100%' height='100%'
        />
      </div>
      </div>
    </div>
  );
}

export default App;
