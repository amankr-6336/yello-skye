import React from "react";
import { sampleProjects } from "@/sampledata/Data";
import Card from "@/component/common-ui/card/Card";
import { FaImages } from "react-icons/fa";
function page({ params }) {
  const projectId = params.projectId;
  const project = sampleProjects.find((data) => Number(projectId) === data.id);
  return (
    <div style={{ padding: "10px" }}>
      <h3 style={{ margin: "10px" }}> Images</h3>
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
                <FaImages style={{ fontSize: "2rem" }} />
              </div>

              <h4 style={{ flex: "1" }}>{data.title}</h4>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default page;
