'use client';
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';

import styles from './singleProjectView.module.css';

const SingleProjectMap = ({ location, projectName }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const coords = fromLonLat([location.lng, location.lat]);

    const marker = new Feature({
      geometry: new Point(coords),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          src: '/marker.png', // Put a marker image in public folder
          anchor: [0.5, 1],
          scale: 0.08,
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        vectorLayer
      ],
      view: new View({
        center: coords,
        zoom: 14,
      }),
    });

    return () => map.setTarget(null);
  }, [location]);

  return (
    <div className={styles.mapContainer}>
      <div ref={mapRef} className={styles.map}></div>
    </div>
  );
};

export default SingleProjectMap;
