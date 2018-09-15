import React, { Component } from 'react';

import '../Home.css';

import business1 from '../images/business1.jpg';
import business2 from '../images/business2.jpg';
import business3 from '../images/business3.jpg';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="full-img">
          <div className='intro-text center'>This is our<br/><span className="highlight-black">Awesome Business</span></div>
        </div>
        <div className="container center">
          <h2>Look at this cool stuff!</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="thumbnail">
                <img src={business1} className="img-responsive" alt="business 1" />
                <div className="caption">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="thumbnail">
                <img src={business2} className="img-responsive" alt="business 2" />
                <div className="caption">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="thumbnail">
                <img src={business3} className="img-responsive" alt="business 3" />
                <div className="caption">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid contact-footer">
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
                <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
