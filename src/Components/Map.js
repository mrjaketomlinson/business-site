import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import '../Home.css';

const LoadingContainer = (props) => (
  <div className="map-container"></div>
)

class MapComponent extends Component {
  render() {
    return (
      <Map google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 39.7392,
            lng: -104.9903
          }}
          >
        <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAV3zDtAzyXUc_KIUnlidg6EM6aLzTwjWQ"),
  LoadingContainer: LoadingContainer
})(MapComponent)
