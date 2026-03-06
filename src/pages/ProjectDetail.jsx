import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const params = useParams();

  return (
    <div style={{ padding: "120px", color: "black", background: "yellow" }}>
      <h1>Project Detail Page</h1>
      <p>Param: {JSON.stringify(params)}</p>
    </div>
  );
}

export default ProjectDetail;