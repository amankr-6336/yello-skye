"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sampleProjects } from "@/sampledata/Data";
import Card from "@/component/common-ui/card/Card";
import Button from "@/component/common-ui/button/Button";
import styles from  './ProjectListing.module.css'

function ProjectsPage() {
 
  const router=useRouter();
  const handleCardClick = (projectid) => {
    router.push(`/dashboard/project/${encodeURIComponent(projectid)}`);
  };

  const handleNaviagteToSection = (projectid, section, e) => {
    e.stopPropagation();
    router.push(
      `/dashboard/project/${encodeURIComponent(projectid)}/${section}`
    );
  };

  return (
    <div
      style={{
        padding: "10px",
        height: "fit-content",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ margin: "10px" }}> Projects</h3>
      </div>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {sampleProjects.map((project, index) => (
          <Card
            variant="outlined"
            key={index}
            onClick={() => handleCardClick(project.id)}
          >
            <div className={styles.cardSection}>
              <p>{project.name}</p>
              <hr />
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  type="secondary"
                  size="small"
                  onClick={(e) =>
                    handleNaviagteToSection(project.id, "images", e)
                  }
                >
                  {project.images.length} images
                </Button>
                <Button
                  type="secondary"
                  size="small"
                  onClick={(e) =>
                    handleNaviagteToSection(project.id, "videos", e)
                  }
                >
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
