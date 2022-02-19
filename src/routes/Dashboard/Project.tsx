import { ArchiveIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardTitle from "../../components/Dashboard/ItemsTitle";
import Kanbaan from "../../components/Kanbaan/Kanbaan";
import { fetchSingleProject } from "../../services/projectRequests";
import ProjectInterface from "../../types/ProjectInterface";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectInterface | null>(null);

  useEffect(() => {
    if (id) {
      fetchSingleProject(id).then((project) => setProject(project));
    }
  }, [id]);

  return (
    <div className="customContainer">
      {project && (
        <>
          <DashboardTitle
            title={project.name}
            icon={<ArchiveIcon style={{ color: project.color }} />}
          />

          <div className="mt-8">
            <Kanbaan project={project} setProject={setProject} />
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
