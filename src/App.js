import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import Aline from './routes/Aline';
import Scent from './routes/Scent'
import About from './routes/About'
import Navigation from './components/Navigation';


function App(){


  return <HashRouter>
    <Navigation/>
    <Route path='/' exact={true} component= {Home} />
    <Route path='/aline' component= {Aline} />
    <Route path='/scent' component= {Scent} />
    <Route path='/about' component= {About} />
  </HashRouter>
}

export default App;