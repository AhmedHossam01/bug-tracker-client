import { ArchiveIcon } from "@heroicons/react/outline";
import DashboardTitle from "../../components/Dashboard/ItemsTitle";
import DashboardProjectCard from "../../components/Dashboard/ProjectCard";
import { useAppSelector } from "../../store/hooks";

const AllProjects = () => {
  const { projects, isLoading, error } = useAppSelector(
    (state) => state.projects
  );

  return (
    <div className="customContainer">
      <DashboardTitle title="All projects" icon={<ArchiveIcon />} />

      <div className="mt-8">
        {isLoading && (
          <div className="animate-pulse text-xl bg-white rounded-md flex items-center justify-center text-slate-600">
            Fetching...
          </div>
        )}

        {projects?.map((project) => (
          <div key={project.id} className="mt-4">
            <DashboardProjectCard project={project} />
          </div>
        ))}
        {projects?.map((project) => (
          <div key={project.id} className="mt-4">
            <DashboardProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
