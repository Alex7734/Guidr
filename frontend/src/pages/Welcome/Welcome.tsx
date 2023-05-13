import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidHVkb3I5MDAiLCJhIjoiY2xoa3cyb292MHc1aDNucXB5cnJmOWdtMCJ9.-WGWKDZihxwHtun9LaZWTw';

const Map = () => {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(21.22571);
  const [lat, setLat] = useState(45.75372);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    map.on('move', () => {
      setLng(parseFloat(map.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.getZoom().toFixed(2)));
    });

    const marker1 = new mapboxgl.Marker().setLngLat([21.240408, 45.745693]).addTo(map);

    const popup = new mapboxgl.Popup({ closeOnClick: false, closeButton: false })
      .setHTML('<h3>Marker 1</h3><p>This is marker 1</p>');

    marker1.setPopup(popup);

    // Add an event listener to the marker's DOM element
    marker1.getElement().addEventListener('click', () => {
      if (marker1.getPopup().isOpen()) {
        marker1.getPopup().remove();
      } else {
        marker1.togglePopup();
      }
    });

    return () => {
      marker1.remove();
      map.remove();
    };
  }, []);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Cea mai Smekera Harta a Timisoarei</h1>
      <Map />
    </div>
  );
}

export default App;
