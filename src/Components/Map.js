import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class CoffeeMapComponent extends Component {
  render() {
    const { onPress, children } = this.props;
    return (
      <button id='coffee-details-button' type="button" onClick={onPress}>{children}</button>
    )
  }
}

const CoffeeDetails = ({ text, text2 }) => <div id='coffee-details' className='coffee-details hide'><strong>{text}</strong><br/><em>{text2}</em></div>;

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.toggleHide = this.toggleHide.bind(this);
  }
  static defaultProps = {
    center: {
      lat: 39.7392,
      lng: -104.9903
    },
    zoom: 14
  };
  toggleHide() {
    var coffeeDeets = document.querySelector('#coffee-details');
    coffeeDeets.classList.toggle('hide');
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          <CoffeeMapComponent
            lat={39.7392}
            lng={-104.9903}
            onPress={this.toggleHide}><span className="fas fa-coffee fa-3x"></span></CoffeeMapComponent>

          <CoffeeDetails
            lat={39.745}
            lng={-104.995}
            text={'The Bean Coffee House.'}
            text2={'Not really, this is just Denver.'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;
