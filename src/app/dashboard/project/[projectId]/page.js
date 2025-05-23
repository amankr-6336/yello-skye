"use client";
import { useRouter } from "next/navigation";
import Button from "@/component/common-ui/button/Button";
import { sampleProjects } from "@/sampledata/Data";
import { useParams } from "next/navigation";
import SingleProjectMap from "@/component/projectMapview/SingleProjectMapView";
import styles from "./projectDetail.module.css";
import StatusLabel from "@/component/common-ui/statusLabel/StatusLabel";
export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.projectId;
  const router = useRouter();

  const handleNavigateSection = (section) => {
    // You can also use project.id or a slug instead
    router.push(`/dashboard/project/${projectId}/${section}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.detailSection}>
          <h3> {sampleProjects[0].name}</h3>

          <div className={styles.sectionbox}>
            <p style={{ fontSize: "0.8rem", color: "grey" }}>Description</p>
            <p>{sampleProjects[0].description}</p>
          </div>

          <div className={styles.sectionbox}>
            <p style={{ fontSize: "0.8rem", color: "grey" }}>Status</p>
            <StatusLabel status={sampleProjects[0].status} />
          </div>

          <div className={styles.sectionbox}>
            <p style={{ fontSize: "0.8rem", color: "grey" }}>Section</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button size="small" type="secondary"  onClick={() => handleNavigateSection("images")}>
                images
              </Button>
              <Button size="small" type="secondary" onClick={() => handleNavigateSection("videos")}>
                videos
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
