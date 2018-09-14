import React, { Component } from 'react';

import MapComponent from '../Components/Map';

import '../Home.css';

class Contact extends Component {

  render() {
    return (
      <div>
        <div className="container topper">
          <h1>Contact</h1>
        </div>
        <div>
          <MapComponent />
        </div>
      </div>
    );
  }
}

export default Contact;
