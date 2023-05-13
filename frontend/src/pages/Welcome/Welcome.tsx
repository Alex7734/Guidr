import { useEffect, useRef, useState } from 'react';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import turf from '@turf/turf';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import SearchBar from '@/components/SearchBar/Searchbar';

mapboxgl.accessToken =
  'pk.eyJ1IjoidHVkb3I5MDAiLCJhIjoiY2xoa3cyb292MHc1aDNucXB5cnJmOWdtMCJ9.-WGWKDZihxwHtun9LaZWTw';

const Map = () => {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(21.22571);
  const [lat, setLat] = useState(45.75372);
  const [zoom, setZoom] = useState(13);
  const bounds = [
    [21.148834380930737,45.70095987580634],
    [21.319834380930737,45.80095987580634]
  ]as mapboxgl.LngLatBoundsLike;

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: bounds, 
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

    map.setMinZoom(11.01);

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
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <SearchBar onSearch={function (searchTerm: string): void {
                throw new Error('Function not implemented.');
      } } />
      <div ref={mapContainer} style={{ position: 'fixed', top: 55, left: 0, right: 0, bottom: 0 }} />
    </div>
  );
  
};

function App() {
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
