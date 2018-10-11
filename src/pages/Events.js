import React, { Component } from 'react';

import Calendar from '../Components/Calendar';

import '../Home.css';

class Events extends Component {
  render() {
    return (
      <div>
        <div className="container topper">
          <h1 className="highlight-blue"><span className='fas fa-angle-double-right'></span> Events</h1>
        </div>
        <div className="container topper">
          <Calendar />
        </div>
        <div className="container-fluid contact-footer">
          <div className="container">
            <h3>Contact us!</h3>
            <form>
              <div className="form-group">
                <label htmlFor="FormControlInput1">Name</label>
                <input type="email" className="form-control" id="FormControlInput1" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="FormControlInput2">Email address</label>
                <input type="email" className="form-control" id="FormControlInput2" placeholder="name@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="FormControlTextarea1">How can we help?</label>
                <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
