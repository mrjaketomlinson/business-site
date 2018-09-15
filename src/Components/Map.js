import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import '../Home.css';

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 39.7392,
      lng: -104.9903
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '60vh', width: 'inherit' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAV3zDtAzyXUc_KIUnlidg6EM6aLzTwjWQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default MapComponent;
