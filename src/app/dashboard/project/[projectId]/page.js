export default function ProjectDetailsPage({ params }) {
  const { projectId} = params;
  console.log(params);

  return (
    <div>
      <h1>Project: {projectId}</h1>
    </div>
  );
}
