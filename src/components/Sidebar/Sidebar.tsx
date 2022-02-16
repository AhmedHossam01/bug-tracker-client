import SidebarAction from "./SiedebarAction";
import SidebarLink from "./SidebarLink";
import {
  ArchiveIcon,
  CogIcon,
  HomeIcon,
  LogoutIcon,
  PlusCircleIcon,
  TicketIcon,
} from "@heroicons/react/outline";
import SidebarHeading from "./SidebarHeading";
import { useAppSelector } from "../../store/hooks";
import SubLink from "./SubLink";

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const user = useAppSelector((state) => state.auth.user);
  const projects = useAppSelector((state) => state.projects.projects);
  const tickets = useAppSelector((state) => state.tickets.tickets);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  return (
    <div
      data-testid="sidebar"
      className={`transition-[width,padding] whitespace-nowrap flex bg-slate-100 h-full flex-shrink-0 overflow-x-hidden overflow-y-auto dark:bg-slate-800 ${
        isSidebarOpen ? "w-0 p-0 md:p-4 md:w-72" : "md:w-0 md:p-0 w-full p-4"
      }`}
    >
      <ul className="flex flex-col w-full">
        <SidebarLink
          to="/dashboard"
          key="dashboard"
          name="Dashboard"
          icon={<HomeIcon className="w-6 h-6" />}
        />

        <SidebarLink
          to="tickets"
          key="tickets"
          name="My Tickets"
          badge={tickets?.length.toString()}
          icon={<TicketIcon className="w-6 h-6" />}
        />

        <SidebarHeading title="My Projects" />

        <SidebarLink
          name="All Projects"
          to="projects"
          key="projects"
          badge={projects?.length.toString()}
          icon={<ArchiveIcon className="w-6 h-6" />}
        />

        <div>
          {projects?.map((project) => (
            <SubLink key={project.id} project={project} />
          ))}
        </div>

        <SidebarAction
          name="New Project"
          icon={
            <PlusCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
          }
        />

        <div className="mt-auto"></div>

        <SidebarHeading title="Account" />

        <SidebarLink
          to="settings"
          key="settings"
          name="Settings"
          icon={<CogIcon className="w-6 h-6" />}
        />
        <SidebarAction
          name={`Logout (${user?.email.substring(0, 8)}...)`}
          icon={<LogoutIcon className="w-6 h-6 text-red-500" />}
          onClick={handleLogout}
        />
        <li className="py-2"></li>
      </ul>
    </div>
  );
};

export default Sidebar;
