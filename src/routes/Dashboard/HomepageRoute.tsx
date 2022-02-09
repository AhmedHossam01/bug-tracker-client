import { ArchiveIcon, ClockIcon } from "@heroicons/react/outline";
import DashboardProjectCard from "../../components/Dashboard/ProjectCard";
import DashboardTicketCard from "../../components/Dashboard/TicketCard";
import DashboardTitle from "../../components/Dashboard/ItemsTitle";

const HomepageRoute = () => {
  return (
    <div className="customContainer mb-12">
      <div className="flex justify-between flex-col lg:flex-row gap-8">
        <div className="lg:w-7/12">
          <DashboardTitle title="My projects" icon={<ArchiveIcon />} />

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <DashboardProjectCard />
            <DashboardProjectCard />
            <DashboardProjectCard />
            <DashboardProjectCard />
          </div>
        </div>

        <div className="lg:w-5/12">
          <DashboardTitle title="Recent tickets" icon={<ClockIcon />} />

          <div className="mt-4 flex flex-col gap-4">
            <DashboardTicketCard />
            <DashboardTicketCard />
            <DashboardTicketCard />
            <DashboardTicketCard />
            <DashboardTicketCard />
            <DashboardTicketCard />
            <DashboardTicketCard />
            <DashboardTicketCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageRoute;
