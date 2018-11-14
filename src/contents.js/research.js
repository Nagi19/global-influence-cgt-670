import React, { Component } from 'react';
import '../App.css';
import '../styling/nav.css';
import image from '../images.jpg';

class Research extends Component {
  render() {
    return (
        <div className="App-header">        
                   <div>HELLO. <br/>
              I ENJOY BUILDING BEAUTIFUL THINGS.
          </div>
          <hr />
          <br/>
          <div className="row">
            <div className="col-4 col-md-4">
              <img src= {image} alt="logo" />
              <div>
                <div>ENGINEER</div>
                <p>
                small details small details small details small detailssmall detailssmall details small details small details 
                </p>
              </div>
            </div>
            <div className="col-4 col-md-4">
              <img src= {image} alt="logo" />
              <div>
                <div>ENGINEER</div>
                <p>
                small details small details small details small detailssmall detailssmall details small details small details 
                </p>
              </div>
            </div>
            <div className="col-4 col-md-4">
              <img src= {image} alt="logo" />
              <div>
                <div>ENGINEER</div>
                <p>
                small details small details small details small detailssmall detailssmall details small details small details 
                </p>
              </div>
              </div>
          </div>
            </div>
    );
  }
}

export default Research;