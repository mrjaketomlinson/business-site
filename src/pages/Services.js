import React, { Component } from 'react';

import services1 from '../images/services1.jpg';
import services2 from '../images/services2.jpg';
import services3 from '../images/services3.jpg';

import '../Home.css';

class Services extends Component {
  render() {
    return (
      <div>
        <div className="container topper">
          <h1>Services</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-8">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active" />
                  <li data-target="#myCarousel" data-slide-to="1" />
                  <li data-target="#myCarousel" data-slide-to="2" />
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <img className="d-block w-100" src={services1} alt="First slide" />
                    <div className="carousel-caption black">
                      <h3>Business Plan</h3>
                    </div>
                  </div>
                  <div className="item">
                    <img className="d-block w-100" src={services2} alt="Second slide" />
                    <div className="carousel-caption black">
                      <h3>Media Marketing</h3>
                    </div>
                  </div>
                  <div className="item">
                    <div className="carousel-caption black">
                      <h3>Back up your Data</h3>
                    </div>
                    <img className="d-block w-100" src={services3} alt="Third slide" />
                  </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-xs-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <div className="contact-footer footer">
          <div className="container">
            <h3>Contact us!</h3>
            <form>
              <div class="form-group">
                <label for="FormControlInput1">Name</label>
                <input type="email" class="form-control" id="FormControlInput1" placeholder="John Doe" />
              </div>
              <div class="form-group">
                <label for="FormControlInput2">Email address</label>
                <input type="email" class="form-control" id="FormControlInput2" placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="FormControlTextarea1">How can we help?</label>
                <textarea class="form-control" id="FormControlTextarea1" rows="3" />
              </div>
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
