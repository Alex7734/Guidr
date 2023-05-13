import { useEffect, useRef, useState } from 'react';
import { MapboxDraw } from '@mapbox/mapbox-gl-draw';
import { center, points } from '@turf/turf';
import mapboxgl from 'mapbox-gl';
import ReactDOMServer from 'react-dom/server';
import SearchBar from '@/components/SearchBar/Searchbar';
import BurgerMenu from '@/components/FloatingMenu/FloatingMenu';
import styles from './popups.module.css';
import usePoints from '@/hooks/usePoints';

import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidHVkb3I5MDAiLCJhIjoiY2xoa3cyb292MHc1aDNucXB5cnJmOWdtMCJ9.-WGWKDZihxwHtun9LaZWTw';

const Map = () => {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(21.22571);
  const [lat, setLat] = useState(45.75372);
  const [zoom, setZoom] = useState(13);
  const { data: pointsData, loading, error } = usePoints();

  useEffect(() => {
    if (pointsData) {
      pointsData.forEach((point: { longitude: number; latitude: number; }) => {
        const marker = new mapboxgl.Marker().setLngLat([point.longitude, point.latitude]).addTo(map);
        const popupContent = (
          <div>
            {/* Popup content for each point */}
          </div>
        );
        const popup = new mapboxgl.Popup().setDOMContent(document.createRange().createContextualFragment(ReactDOMServer.renderToString(popupContent)));
        marker.setPopup(popup);
      });
    }
  }, [pointsData]);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: bounds,
    });

    // Create and customize markers and popups

    return () => {
      // Cleanup code
      map.remove();
    };
  }, []);

  return (
    <div>
      {/* Search bar and map container */}
      <SearchBar onSearch={() => {}} />
      <div ref={mapContainer} style={{ position: 'fixed', top: 55, left: 0, right: 0, bottom: 0 }} />
      {/* Floating menu */}
      <BurgerMenu />
    </div>
  );
};

function App() {
  return (
    <div>
      {/* Render the map */}
      <Map />
    </div>
  );
}

export default App;
