"use client";

import React, { useState ,useCallback } from "react";
import { useRouter } from "next/navigation";
import { sampleProjects } from "@/sampledata/Data";
import Card from "@/component/common-ui/card/Card";
import Button from "@/component/common-ui/button/Button";
import styles from "./ProjectListing.module.css";
import SearchBar from "@/component/searchbar/SearchBar";

function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(sampleProjects);

  const handleSearchResults = useCallback((results) => {
    setFilteredProjects(results);
  }, []);

  const router = useRouter();
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
      <div className={styles.header}>
        <SearchBar
          projects={sampleProjects}
          onSearchResults={handleSearchResults}
        />
      </div>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {filteredProjects.map((project, index) => (
          <Card
            size="projectBox"
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
