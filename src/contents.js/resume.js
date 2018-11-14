import React, { Component } from 'react';
import '../App.css';
import '../styling/nav.css';
import edu_icon from '../education.jpg';

class Resume extends Component {
  render() {
    return (
        <div className="App-header">        
          <div>
              HI! I'M APURVA NAGARAJAN. <br/>
              I ENJOY BUILDING BEAUTIFUL THINGS.
          </div>
          <hr />
          <div className="row">
          <div className="col-3 col-md-3">                    
                    <p >  
                         <a className = "links" href = "None"> DOWNLOAD</a>
                    </p>

                    </div>
            <div className="col-3 col-md-3">
                    <p> EDUCATION </p>
                    </div>
            <div className="col-3 col-md-3"> 
                    <p> EXPERINECE </p> </div>
            <div className="col-3 col-md-3"> 
                    <p> SKILLS </p> </div>
           </div>

           <br/><br/>

            <div className="row">
            <div className="col-3 col-md-3">   
                <img className = "resumeIcons" src= {edu_icon} alt="logo" />
                <div>EDUCATION</div>
            </div>
            <div className="col-3 col-md-3">   
              <p>
                  <strong>
                      Aug 2018 - Present <br/>
                        Lab <br/>
                        Specialization <br/>
                        Ph.D. Thesis <br/>
                        </strong>
              </p>


            </div>

            <div className="col-6 col-md-6">   
            
            <p>
                  <strong>
                      Aug 2018 - Present <br/>
                        Lab <br/>
                        Specialization <br/>
                        Ph.D. Thesis <br/>
                        </strong>
              </p>
              </div>
            </div>
            </div>
    );
  }
}

export default Resume;