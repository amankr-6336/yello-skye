"use client";

import React from "react";
// data
import { sampleProjects } from "@/sampledata/Data";
// component
import Card from "@/component/common-ui/card/Card";
// icons
import { FaFileVideo } from "react-icons/fa";
import { useParams } from "next/navigation";

function Video() {
  const params = useParams();
  const projectId = params.projectId;
  // getting video of selected project
  const project = sampleProjects.find((data) => Number(projectId) === data.id);
  return (
    <div style={{ padding: "10px" }}>
      <h3 style={{ margin: "10px" }}> Videos</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {project.videos.map((data, index) => (
          <Card key={index} size="contentBox" padding="small" shadow="medium">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                height: "100%",
              }}
            >
              <div
                style={{
                  flex: "5",
                  backgroundColor: "grey",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaFileVideo style={{ fontSize: "2rem" }} />
              </div>

              <h4 style={{ flex: "1" }}>{data.title}</h4>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Video;
