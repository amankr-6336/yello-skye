"use client"
import { useRouter } from "next/navigation";
import Button from "@/component/common-ui/button/Button";
import { sampleProjects } from "@/sampledata/Data";
import { useParams } from "next/navigation";


export default function ProjectDetailsPage() {
   const params = useParams();
   const projectId = params.projectId;
  const router = useRouter();

  const handleNavigateSection = (section) => {
    // You can also use project.id or a slug instead
    router.push(`/dashboard/project/${projectId}/${section}`);
  };

  return (
    <div style={{padding:"10px"}}>
        <div>
           <h3> {sampleProjects[0].name}</h3>
            <p>{sampleProjects[0].description}</p>
            <p>Status : {sampleProjects[0].status}</p>
        </div>
        <div style={{display:"flex",gap:"10px"}}>
           <Button onClick={()=> handleNavigateSection("images")}>
              images
           </Button>
           <Button onClick={()=>handleNavigateSection("videos")}>
               videos
           </Button>
        </div>
    </div>
  );
}
