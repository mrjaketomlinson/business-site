import React, { Component } from 'react';

import '../Home.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className="container topper">
          <h1 className="highlight-blue">About</h1>
        </div>
        <div className="container topper">
          <div className="row">
            <div className="col-md-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="col-md-4">
                <p className="placeholder center">This is a placeholder for an image</p>
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

export default About;
