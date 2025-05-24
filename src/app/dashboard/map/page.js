"use client"

import React from "react";
import { sampleProjects } from "@/sampledata/Data";
import MapView from "@/component/mapView/mapView";

function page() {
  return (
    <div style={{ padding: "10px", height: "100% " }}>
      <div>
        <MapView projects={sampleProjects} />
      </div>
    </div>
  );
}

export default page;
