import React from "react";
import Image from "next/image";
import { sampleProjects } from "@/sampledata/Data";
import Card from "@/component/common-ui/card/Card";
function page() {
  return (
    <div style={{padding:"10px"}}>
    <p>Images</p>
    <div style={{display:"flex",gap:"10px" , flexWrap:"wrap"}}>
      {sampleProjects[0].images.map((data, index) => (
        <Card key={index} size='contentBox' padding="small" shadow="medium">
          <Image
            src={data.url}
            alt={data.title}
            width={300}
            height={200}
            style={{ objectFit: "cover",height:"80%" }}
          />
          <p style={{height:"20%"}}>{data.title}</p>
        </Card>
      ))}
    </div>
    </div>
  );
}

export default page;
