import SiedebarItem from "./SiedebarItem";
import {
  ArchiveIcon,
  CogIcon,
  HomeIcon,
  LogoutIcon,
  PlusCircleIcon,
  TicketIcon,
} from "@heroicons/react/outline";
import SidebarHeading from "./SidebarHeading";

const Sidebar = () => {
  return (
    <div className="flex w-64 p-4 bg-white h-screen flex-shrink-0 overflow-y-auto dark:bg-slate-800">
      <ul className="flex flex-col w-full">
        <SiedebarItem
          active
          name="Dashboard"
          icon={<HomeIcon className="w-6 h-6" />}
        />

        <SiedebarItem
          name="My Tickets"
          badge="16"
          icon={<TicketIcon className="w-6 h-6" />}
        />

        <SidebarHeading title="My Projects" />

        <SiedebarItem
          name="All Projects"
          badge="2"
          icon={<ArchiveIcon className="w-6 h-6" />}
        />

        <SiedebarItem
          name="New Project"
          icon={<PlusCircleIcon className="w-6 h-6 text-green-400" />}
        />

        <div className="mt-auto"></div>

        <SidebarHeading title="Account" />

        <SiedebarItem name="Settings" icon={<CogIcon className="w-6 h-6" />} />
        <SiedebarItem
          name="Logout (Ahmed)"
          icon={<LogoutIcon className="w-6 h-6 text-red-500" />}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
