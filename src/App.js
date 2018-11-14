import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import Nav from './components/nav';
import Resume from './contents.js/resume';
import Home from './contents.js/home';
import Research from './contents.js/research';


import './App.css';


class App extends Component {
  render() {
    return (
      
      <HashRouter>

      <div className="App">
             <Nav/>
       <div class="container-fluid">
        <header className="App-header">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/resume' component={Resume}/>
            <Route exact path='/research' component={Research}/>

       </Switch>
        </header>
       
      </div></div>
      </HashRouter>

      
    );
  }
}

export default App;
