import { useEffect, useRef, useState } from 'react';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import turf from '@turf/turf';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoidHVkb3I5MDAiLCJhIjoiY2xoa3cyb292MHc1aDNucXB5cnJmOWdtMCJ9.-WGWKDZihxwHtun9LaZWTw';

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
      zoom: zoom,
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: 'draw_polygon',
    });

    map.on('move', () => {
      setLng(parseFloat(map.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.getZoom().toFixed(2)));
    });

    const marker1 = new mapboxgl.Marker().setLngLat([21.240408, 45.745693]).addTo(map);

    const popup = new mapboxgl.Popup({ closeOnClick: true, closeButton: true }).setHTML(
      '<h3 style="color:black;">Marker 1</h3><p style="color:black;">This is marker 1</p>',
    );

    marker1.setPopup(popup);

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
