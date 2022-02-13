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

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  return (
    <div
      data-testid="sidebar"
      className={`transition-[width,padding] whitespace-nowrap flex bg-slate-100 h-full flex-shrink-0 overflow-y-auto dark:bg-slate-800 ${
        isSidebarOpen ? "w-0 p-0 md:p-4 md:w-64" : "md:w-0 md:p-0 w-full p-4"
      }`}
    >
      <ul className="flex flex-col w-full">
        <SidebarLink
          active
          name="Dashboard"
          icon={<HomeIcon className="w-6 h-6" />}
        />

        <SidebarLink
          name="My Tickets"
          badge="16"
          icon={<TicketIcon className="w-6 h-6" />}
        />

        <SidebarHeading title="My Projects" />

        <SidebarLink
          name="All Projects"
          badge="2"
          icon={<ArchiveIcon className="w-6 h-6" />}
        />

        <SidebarAction
          name="New Project"
          icon={
            <PlusCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
          }
        />

        <div className="mt-auto"></div>

        <SidebarHeading title="Account" />

        <SidebarLink name="Settings" icon={<CogIcon className="w-6 h-6" />} />
        <SidebarAction
          name={`Logout (${user?.email.substring(0, 8)}...)`}
          icon={<LogoutIcon className="w-6 h-6 text-red-500" />}
          onClick={handleLogout}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
