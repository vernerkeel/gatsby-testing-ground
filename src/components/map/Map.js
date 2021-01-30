import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import mapStyles from './Map.module.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';

const isDomAvailable = typeof window !== 'undefined';

if (isDomAvailable) {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
}

const Map = (props) => {
  const { children, ...rest } = props;
  if (!isDomAvailable) {
    return (
      <div className={mapStyles.map}>
        <p className={mapStyles.mapLoading}>Loading map...</p>
      </div>
    );
  }
  const mapOptions = {
    zoomControl: false,
    zoom: 12,
    fullscreenControl: true,
    ...rest,
  };

  return (
    <MapContainer {...mapOptions} className={mapStyles.mapBase}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <ZoomControl position='bottomright' />

      {children}
    </MapContainer>
  );
};

Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultBaseMap: PropTypes.string,
  mapEffect: PropTypes.func,
};

export default Map;
