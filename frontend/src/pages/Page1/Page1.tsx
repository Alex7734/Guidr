import { useCallback, useEffect, useRef, useState } from 'react';

import Typography from '@mui/material/Typography';

import * as turf from '@turf/turf';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Meta from '@/components/Meta';

interface DrawEvent {
  type: string;
}

interface DrawInstance {
  getAll: () => any;
}

function Page1() {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState<number>(21.22571);
  const [lat, setLat] = useState<number>(45.75372);
  const [zoom, setZoom] = useState<number>(13);
  const [polygonData, setPolygonData] = useState(null);
  const bounds = [
    [21.148834380930737,45.70095987580634],
    [21.319834380930737,45.80095987580634]
  ]as mapboxgl.LngLatBoundsLike;

  const updateArea = useCallback(
    (e: DrawEvent, draw: DrawInstance) => {
      const data = draw.getAll();
      console.log('data', data);
      setPolygonData(data); // Save polygon data to state
    },
    [],
  );

  useEffect(() => {
    console.log('polygonData changed', polygonData);
  }, [polygonData]);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken =
      'pk.eyJ1IjoidHVkb3I5MDAiLCJhIjoiY2xoa3cyb292MHc1aDNucXB5cnJmOWdtMCJ9.-WGWKDZihxwHtun9LaZWTw';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: bounds
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: 'draw_polygon',
    });

    map.addControl(draw);
    map.on('draw.create', (e) => updateArea(e, draw));
    map.on('draw.delete', (e) => updateArea(e, draw));
    map.on('draw.update', (e) => updateArea(e, draw));

    return () => map.remove();
  }, [updateArea]);

  return (
    <>
      {/* <Meta title="page 1" />
      <Typography variant="h6" style={{ marginBottom: '16px' }}>
        Click the map to draw a polygon.
      </Typography> */}
      <div ref={mapContainer} style={{ position: 'fixed', top: 55, left: 0, right: 0, bottom: 0 }} />
      {/* <div id="calculated-area" />
      {polygonData && (
        <div>
          <h2>Polygon Data:</h2>
          <pre>{JSON.stringify(polygonData, null, 2)}</pre>
        </div>
      )} */}
    </>
  );
}

export default Page1;
