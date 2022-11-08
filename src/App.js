import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import Aline from './routes/Aline';
import Scent from './routes/Scent';
import About from './routes/About';
import Flot from './routes/Flot';
import Hugo from './routes/Hugo';
import StickIt from './routes/StickIt';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Ringle from './routes/Ringle'

function App(){


  return <HashRouter>
    <ScrollToTop />
    <Navigation/>
    <Route path='/' exact={true} component= {Home} />
    <Route path='/about' component= {About} />
    <Route path='/aline' component= {Aline} />
    <Route path='/ringle' component= {Ringle} />
    <Route path='/scent' component= {Scent} />
    <Route path='/flot'  component= {Flot} />
    <Route path='/hugo'  component= {Hugo} />
    <Route path='/stick-it' component = {StickIt} />
  </HashRouter>
}

export default App;