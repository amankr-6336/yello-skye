"use client";
import { useParams, useRouter } from "next/navigation";
import Button from "@/component/common-ui/button/Button";
import { sampleProjects } from "@/sampledata/Data";
import SingleProjectMap from "@/component/projectMapview/SingleProjectMapView";
import styles from "./projectDetail.module.css";
import StatusLabel from "@/component/common-ui/statusLabel/StatusLabel";
export default function ProjectDetailsPage() {
  const params=useParams();
  const projectId = params.projectId;
  const router = useRouter();

  const project = sampleProjects.find((data) => Number(projectId) === data.id);

  const handleNavigateSection = (section) => {
    // You can also use project.id or a slug instead
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
