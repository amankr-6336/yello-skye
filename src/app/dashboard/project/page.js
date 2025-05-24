"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
// Auth hook
import { useAuth } from "@/service/AuthProvider";
import { sampleProjects } from "@/sampledata/Data";
// component
import SearchBar from "@/component/searchbar/SearchBar";
import Card from "@/component/common-ui/card/Card";
import Button from "@/component/common-ui/button/Button";
import LoadingSpinner from "@/component/loading-indicator/Spinner";
// css modules
import styles from "./ProjectListing.module.css";

function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(sampleProjects);
  const { user, authLoading } = useAuth();
  const router = useRouter();

  // function to set filetered result
  const handleSearchResults = useCallback((results) => {
    setFilteredProjects(results);
  }, []);

  // on clicking on card nagivate to that project page
  const handleCardClick = (projectid) => {
    router.push(`/dashboard/project/${encodeURIComponent(projectid)}`);
  };

  // on clicking on video or image , directly navigating to that project video or image section
  const handleNaviagteToSection = (projectid, section, e) => {
    e.stopPropagation();
    router.push(
      `/dashboard/project/${encodeURIComponent(projectid)}/${section}`
    );
  };

  if (authLoading) return <LoadingSpinner />;

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
            pointer="pointer"
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
