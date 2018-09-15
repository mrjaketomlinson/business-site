import React, { Component } from 'react';

import MapComponent from '../Components/Map';

import '../Home.css';

class Contact extends Component {

  render() {
    return (
      <div>
        <div className="container topper">
          <h1 className="highlight-blue">Contact</h1>
        </div>
        <div className="container topper">
          <p><a href="https://www.google.com/maps/place/Denver,+CO/@39.76453,-105.1352905,10z/data=!3m1!4b1!4m5!3m4!1s0x876b80aa231f17cf:0x118ef4f8278a36d6!8m2!3d39.7392358!4d-104.990251" target="_blank">Get directions</a> to us!</p>
          <MapComponent />
        </div>
        <div className="container-fluid">
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

export default Contact;
