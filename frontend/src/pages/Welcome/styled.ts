import React from 'react';
import ReactMapGL from 'react-map-gl';

import { styled } from '@mui/system';

const Image = styled('img')({
  width: '10%',
  height: '10%',
  margin: 4,
});

function Map() {
  const accessToken =
    'pk.eyJ1IjoidHVkb3I5MDAiLCJhIjoiY2xoa3cyb292MHc1aDNucXB5cnJmOWdtMCJ9.-WGWKDZihxwHtun9LaZWTw'; // Replace with your Mapbox access token

  const viewport = {
    width: '100%',
    height: '400px',
    latitude: 37.7577, // Initial map latitude
    longitude: -122.4376, // Initial map longitude
    zoom: 10, // Initial map zoom level
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={accessToken}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    />
  );
}

export default Map;

export default Map;

export { Image };
