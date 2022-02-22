import { ArchiveIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardTitle from "../../components/Dashboard/ItemsTitle";
import Kanbaan from "../../components/Kanbaan/Kanbaan";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateViewProject } from "../../store/projectsSlice";

const Project = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const project = useAppSelector((state) => state.projects.viewProject);
  const projects = useAppSelector((state) => state.projects.projects);

  useEffect(() => {
    if (id) {
      const currentViewProject = projects?.find(
        (project) => project.id.toString() === id.toString()
      );
      if (currentViewProject) {
        dispatch(updateViewProject(currentViewProject));
      }
    }
  }, [id, projects, dispatch]);

  return (
    <div className="customContainer">
      {project && (
        <>
          <DashboardTitle
            title={project.name}
            icon={<ArchiveIcon style={{ color: project.color }} />}
          />

          <div className="mt-8">
            <Kanbaan project={project} />
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
