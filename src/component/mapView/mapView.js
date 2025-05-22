"use client";

import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { useRouter } from "next/navigation";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM } from "ol/source";
import { Vector as VectorSource } from "ol/source";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";
import Overlay from "ol/Overlay";
import { sampleProjects } from "@/sampledata/Data";

export default function ProjectMap() {
  const mapRef = useRef();
  const tooltipRef = useRef();
  const router = useRouter();

  useEffect(() => {
    // Create features for each project
    const features = sampleProjects.map((project) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([project.location.lng, project.location.lat])),
        name: project.name,
        lat: project.location.lat,
        lng: project.location.lng,
        id: project.id, // important for routing
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            scale: 0.05,
          }),
        })
      );

      return feature;
    });

    const vectorSource = new VectorSource({ features });
    const vectorLayer = new VectorLayer({ source: vectorSource });

    // Map instance
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([-122.4194, 37.7749]),
        zoom: 9,
      }),
    });

    // Tooltip overlay
    const tooltip = new Overlay({
      element: tooltipRef.current,
      offset: [10, 0],
      positioning: "center-left",
    });
    map.addOverlay(tooltip);

    // Hover tooltip logic
    map.on("pointermove", function (event) {
      const feature = map.forEachFeatureAtPixel(event.pixel, (feat) => feat);

      if (feature) {
        const coordinates = event.coordinate;
        tooltip.setPosition(coordinates);
        tooltipRef.current.innerHTML = `
          <div style="background: white; border: 1px solid #ccc; padding: 6px 10px; border-radius: 4px; font-size: 14px;">
            <strong>${feature.get("name")}</strong><br />
            Lat: ${feature.get("lat").toFixed(4)}<br />
            Lng: ${feature.get("lng").toFixed(4)}
          </div>
        `;
        tooltipRef.current.style.display = "block";
        map.getTargetElement().style.cursor = "pointer"; 
      } else {
        tooltipRef.current.style.display = "none";
        map.getTargetElement().style.cursor = ""; 
      }
    });

    // Marker click navigation
    map.on("singleclick", function (event) {
      const feature = map.forEachFeatureAtPixel(event.pixel, (feat) => feat);

      if (feature) {
        const projectId = feature.get("id");
        router.push(`/dashboard/project/${projectId}`);
      }
    });

    return () => {
      map.setTarget(null);
    };
  }, [router]);

  return (
    <div style={{ width: "100%", height: "500px", position: "relative" }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
      <div ref={tooltipRef} style={{ position: "absolute", display: "none", pointerEvents: "none" }}></div>
    </div>
  );
}
