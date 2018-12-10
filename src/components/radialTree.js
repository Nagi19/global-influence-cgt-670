import React, { Component } from 'react';
import '../App.css';
import Iframe from 'react-iframe'

class RadialTree extends Component {
  render() {
    return (
        <div className = "container" >        
        <Iframe url="http://localhost:8000/2wayTree/radial.html"
            position="absolute"
            width="100%"
            id="chart"
            className="chart"
            height="100%"
            allowFullScreen/>
      </div>
    );
  }
}

export default RadialTree;