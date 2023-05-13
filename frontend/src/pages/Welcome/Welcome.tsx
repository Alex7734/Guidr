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


  const popup_st= document.createElement('div');


  const popupContent = (
    <div style={{ width: '200px', height: '100px' }}>
      <h3 style={{ color: '#9E5454', margin: 0, textAlign: 'center', fontSize: '25px', lineHeight: '34px', fontWeight: '700', fontFamily: 'url(Guidr/frontend/public/Nunito/Nunito-VariableFont_wght.ttf)', fontStyle: 'normal' }}>Craft</h3>
      <p style={{ color: '#BB9E9E', margin: 0, textAlign: 'center', fontSize: '16px', lineHeight: '17px', fontWeight: '500', fontFamily: 'url(Guidr/frontend/public/Nunito/Nunito-VariableFont_wght.ttf)', fontStyle: 'normal' }}>This is the Centrul Regional de Afaceri Timisoara</p>
    </div>
  );
  
 
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

    const marker1 = new mapboxgl.Marker({element: logoMarker_roadworks_wrapper}).setLngLat([21.240408, 45.745693]).addTo(map);

    const popup = new mapboxgl.Popup({ closeOnClick: true, closeButton: true}).setDOMContent(document.createRange().createContextualFragment(ReactDOMServer.renderToString(popupContent))
    );

    // popup_st.innerHTML = 'test';


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
      <div ref={mapContainer} style={{ position: 'fixed', top:0, left: 0, right: 0, bottom: 0 }} />
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