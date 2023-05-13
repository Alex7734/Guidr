import { useEffect, useRef, useState } from 'react';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import turf, { center } from '@turf/turf';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactDOMServer from 'react-dom/server';
import { borderRadius } from '@mui/system';
import SearchBar from '@/components/SearchBar/Searchbar';
import BurgerMenu from '@/components/FloatingMenu/FloatingMenu';
import styles from './popups.module.css';





mapboxgl.accessToken =
  'pk.eyJ1IjoidHVkb3I5MDAiLCJhIjoiY2xoa3cyb292MHc1aDNucXB5cnJmOWdtMCJ9.-WGWKDZihxwHtun9LaZWTw';

const Map = () => {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(21.22571);
  const [lat, setLat] = useState(45.75372);
  const [zoom, setZoom] = useState(13);
 
 
  
  //wraper is style pentru logoMarker_roadworks
  const logoMarker_roadworks_wrapper = document.createElement('div');
  logoMarker_roadworks_wrapper.style.backgroundColor = '#ed6e6d';
  logoMarker_roadworks_wrapper.style.borderRadius = '70%';
  logoMarker_roadworks_wrapper.style.width = '40px';  
  logoMarker_roadworks_wrapper.style.height = '40px'; 
  logoMarker_roadworks_wrapper.style.display = 'flex';
  logoMarker_roadworks_wrapper.style.justifyContent = 'center';
  logoMarker_roadworks_wrapper.style.alignItems = 'center';
  const logoMarker_roadworks = document.createElement('div'); 
  logoMarker_roadworks.className = 'logoMarker_roadworks';
  logoMarker_roadworks.style.backgroundImage = 'url(public/images/construction-machine-crane-svgrepo-com.svg';
  logoMarker_roadworks.style.width = '30px';
  logoMarker_roadworks.style.height = '30px';  

  logoMarker_roadworks_wrapper.appendChild(logoMarker_roadworks);
  //end of wraper is style pentru logoMarker_roadworks


  //wraper is style pentru events
  const logoMarker_events_wrapper = document.createElement('div');
  logoMarker_events_wrapper.style.backgroundColor = '#24cbda';
  logoMarker_events_wrapper.style.borderRadius = '70%';
  logoMarker_events_wrapper.style.width = '40px';  
  logoMarker_events_wrapper.style.height = '40px'; 
  logoMarker_events_wrapper.style.display = 'flex';
  logoMarker_events_wrapper.style.justifyContent = 'center';
  logoMarker_events_wrapper.style.alignItems = 'center';
  const logoMarker_events= document.createElement('div'); 
  logoMarker_events.className = 'logoMarker_roadworks';
  logoMarker_events.style.backgroundImage = 'url(public/images/party-horn-svgrepo-com.svg';
  logoMarker_events.style.width = '30px';
  logoMarker_events.style.height = '30px';  

  logoMarker_events_wrapper.appendChild(logoMarker_events);


  //wrapper is style pentru power
  const logoMarker_power_wrapper = document.createElement('div');
  logoMarker_power_wrapper.style.backgroundColor = '#ffb221';
  logoMarker_power_wrapper.style.borderRadius = '70%';
  logoMarker_power_wrapper.style.width = '40px';  
  logoMarker_power_wrapper.style.height = '40px'; 
  logoMarker_power_wrapper.style.display = 'flex';
  logoMarker_power_wrapper.style.justifyContent = 'center';
  logoMarker_power_wrapper.style.alignItems = 'center';
  const logoMarker_power= document.createElement('div'); 
  logoMarker_power.className = 'logoMarker_roadworks';
  logoMarker_power.style.backgroundImage = 'url(public/images/power-svgrepo-com.svg';
  logoMarker_power.style.width = '30px';
  logoMarker_power.style.height = '30px';  

  logoMarker_power_wrapper.appendChild(logoMarker_power);




  //wrapper is style pentru housing
  const logoMarker_housing_wrapper = document.createElement('div');
  logoMarker_housing_wrapper.style.backgroundColor = '#27da59';
  logoMarker_housing_wrapper.style.borderRadius = '70%';
  logoMarker_housing_wrapper.style.width = '40px';  
  logoMarker_housing_wrapper.style.height = '40px'; 
  logoMarker_housing_wrapper.style.display = 'flex';
  logoMarker_housing_wrapper.style.justifyContent = 'center';
  logoMarker_housing_wrapper.style.alignItems = 'center';
  const logoMarker_housing= document.createElement('div'); 
  logoMarker_housing.className = 'logoMarker_roadworks';
  logoMarker_housing.style.backgroundImage = 'url(public/images/house-svgrepo-com.svg';
  logoMarker_housing.style.width = '30px';
  logoMarker_housing.style.height = '30px';  

  logoMarker_housing_wrapper.appendChild(logoMarker_housing);


  

  const popupContent_roadworks1 = (
    <div className={styles.popup}>
  <p className={styles.popupRoadworksP1}>RoadWorks1</p>
  <p className={styles.popupRoadworksP2}>Desription</p>
</div>
  );

  
  const popupContent_event1 = (
    <div className={styles.popup}>
      <p className={styles.popupEventsP1}> HackTM</p>
      <p className={styles.popupEventsP2}> Hack The Capital!</p>
    </div>
  )




  
  
  
  
 
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

    const marker1 = new mapboxgl.Marker({element: logoMarker_roadworks_wrapper}).setLngLat([21.22571, 45.745693]).addTo(map);
    const popup_roadworks1 = new mapboxgl.Popup({ closeOnClick: true, closeButton: true}).setDOMContent(document.createRange().createContextualFragment(ReactDOMServer.renderToString(popupContent_roadworks1))
    );
    
    const marker2 = new mapboxgl.Marker({element: logoMarker_events_wrapper}).setLngLat([21.240408, 45.745693]).addTo(map);
    const popup_events1 = new mapboxgl.Popup({ closeOnClick: true, closeButton: true}).setDOMContent(document.createRange().createContextualFragment(ReactDOMServer.renderToString(popupContent_event1))
    );



    marker1.setPopup(popup_roadworks1);
    marker2.setPopup(popup_events1);

    return () => {
      marker1.remove();
      marker2.remove();
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
      <BurgerMenu />
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
