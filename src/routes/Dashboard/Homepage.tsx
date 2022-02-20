import { ArchiveIcon, ClockIcon } from "@heroicons/react/outline";
import DashboardProjectCard from "../../components/Dashboard/ProjectCard";
import DashboardTicketCard from "../../components/Dashboard/TicketCard";
import DashboardTitle from "../../components/Dashboard/ItemsTitle";
import { useAppSelector } from "../../store/hooks";

const Homepage = () => {
  const projectsState = useAppSelector((state) => state.projects);
  const ticketsState = useAppSelector((state) => state.tickets);

  return (
    <div className="customContainer">
      <div className="flex justify-between flex-col lg:flex-row gap-8">
        <div className="lg:w-7/12">
          <DashboardTitle title="My projects" icon={<ArchiveIcon />} />

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {projectsState.isLoading && (
              <div className="animate-pulse text-xl bg-white rounded-md flex items-center justify-center text-slate-600">
                Fetching...
              </div>
            )}

            {projectsState?.projects?.map((project) => (
              <DashboardProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="lg:w-5/12">
          <DashboardTitle title="Recent tickets" icon={<ClockIcon />} />

          <div className="mt-4 flex flex-col gap-4">
            {ticketsState.isLoading && (
              <div className="animate-pulse text-xl bg-white rounded-md flex items-center justify-center text-slate-600">
                Fetching...
              </div>
            )}

            {ticketsState?.tickets?.map((ticket) => (
              <DashboardTicketCard ticket={ticket} key={ticket.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
