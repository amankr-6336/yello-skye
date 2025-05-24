"use client";

import { useParams, useRouter } from "next/navigation";
// components
import Button from "@/component/common-ui/button/Button";
import StatusLabel from "@/component/common-ui/statusLabel/StatusLabel";
import SingleProjectMap from "@/component/projectMapview/SingleProjectMapView";
// data
import { sampleProjects } from "@/sampledata/Data";
// css
import styles from "./projectDetail.module.css";

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.projectId;
  const router = useRouter();

  // getting info of clicked project
  const project = sampleProjects.find((data) => Number(projectId) === data.id);

  // for navigation of section
  const handleNavigateSection = (section) => {
    router.push(`/dashboard/project/${projectId}/${section}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.detailSection}>
          <h3> {project.name}</h3>

          <div className={styles.sectionbox}>
            <p style={{ fontSize: "0.8rem", color: "grey" }}>Description</p>
            <p>{project.description}</p>
          </div>

          <div className={styles.sectionbox}>
            <p style={{ fontSize: "0.8rem", color: "grey" }}>Status</p>
            <StatusLabel status={project.status} />
          </div>

          <div className={styles.sectionbox}>
            <p style={{ fontSize: "0.8rem", color: "grey" }}>Section</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                size="small"
                type="secondary"
                onClick={() => handleNavigateSection("images")}
              >
                {project.images.length} images
              </Button>
              <Button
                size="small"
                type="secondary"
                onClick={() => handleNavigateSection("videos")}
              >
                {project.videos.length} videos
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapSection}>
        <SingleProjectMap
          projectName={sampleProjects[2].name}
          location={sampleProjects[2].location}
        />
      </div>
    </div>
  );
}
