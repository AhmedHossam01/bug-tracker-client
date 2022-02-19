import { ArchiveIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardTitle from "../../components/Dashboard/ItemsTitle";
import Kanbaan from "../../components/Kanbaan/Kanbaan";
import { fetchSingleProject } from "../../services/projectRequests";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Project = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const project = useAppSelector((state) => state.projects.viewProject);

  useEffect(() => {
    if (id) {
      fetchSingleProject(id, dispatch);
    }
  }, [dispatch, id]);

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
