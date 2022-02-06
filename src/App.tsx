import { ArchiveIcon, ClockIcon } from "@heroicons/react/outline";
import Layout from "./components/Layout/Layout";
import DashboardProjectCard from "./components/DashboardProjectCard";
import DashboardTicketCard from "./components/DashboardTicketCard";
import DashboardTitle from "./components/DashboardTitle";

const App = () => {
  return (
    <Layout>
      <div className="customContainer">
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
