import React, { Component } from 'react';
import '../App.css';
import '../styling/nav.css';
import image from '../images.jpg';


class Home extends Component {
  render() {
    return (
        <div>        
                   <div>HI! I'M APURVA NAGARAJAN. <br/>
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
            <br/>
        <div> FEATURED WORK
          </div>
          <hr />
          <div className= "row">
          <div className="col-2 col-md-2"></div>

          <div className="col-8 col-md-8">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100 h-50" src={image} alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100 h-50" src={image} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100 h-50" src={image} alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
            </div>
            </div>
            <div className="col-2 col-md-2"></div>
            </div>
    );
  }
}

export default Home;