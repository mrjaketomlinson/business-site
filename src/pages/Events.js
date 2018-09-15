import React, { Component } from 'react';

import Calendar from '../Components/Calendar';

import '../Home.css';

class Events extends Component {
  render() {
    return (
      <div>
        <div className="container topper">
          <h1 className="highlight-blue">Events</h1>
        </div>
        <div className="container topper">
          <Calendar />
        </div>
        <div className="container-fluid contact-footer footer-events">
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

export default Events;
