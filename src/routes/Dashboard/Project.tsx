import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProject } from "../../services/projectRequests";
import ProjectInterface from "../../types/ProjectInterface";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectInterface | null>(null);

  useEffect(() => {
    if (id) {
      fetchSingleProject(id).then((project) => setProject(project));
    }

    console.log(project);
  }, [id, project]);

  return <div className="customContainer">{project && project.name}</div>;
};

export default Project;
