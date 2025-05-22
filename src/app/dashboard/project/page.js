"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sampleProjects } from "@/sampledata/Data";
import Card from "@/component/common-ui/card/Card";
import Button from "@/component/common-ui/button/Button";

function ProjectsPage() {
  const [projects, setProjects] = useState(sampleProjects);
   const router = useRouter();

  const handleCardClick = (projectid) => {
    // You can also use project.id or a slug instead
    router.push(`/dashboard/project/${encodeURIComponent(projectid)}`);
  };

  return (
    <div
      style={{
        border: "2px solid red",
        padding: "10px",
        height: "fit-content",
      }}
    >
      <div style={{ border: "2px solid red", marginBottom: "20px" }}>
        <h4>Projects</h4>
      </div>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {projects.map((project, index) => (
          <Card variant="outlined" key={index} onClick={()=>handleCardClick(project.id)}>
            <div>
              <p>{project.name}</p>
              <hr />
              <div style={{display:"flex",gap:"10px"}}>
                <Button type="secondary" size="small">
                  {project.images.length} images
                </Button>
                <Button type="secondary" size="small">
                  {project.videos.length} videos
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
