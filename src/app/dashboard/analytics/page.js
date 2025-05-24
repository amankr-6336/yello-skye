"use client"
import ResponsiveLineChart from "@/component/linechart/LineChart";
import React from "react";

function analytics() {
  return (
    <div style={{ width: "100%", height: "fit-content", padding: "10px" }}>
      <ResponsiveLineChart />
    </div>
  );
}

export default analytics;
