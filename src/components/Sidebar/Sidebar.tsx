import SidebarAction from "./SiedebarAction";
import SidebarLink from "./SidebarLink";
import {
  ArchiveIcon,
  HomeIcon,
  LogoutIcon,
  PlusCircleIcon,
  TicketIcon,
} from "@heroicons/react/outline";
import SidebarHeading from "./SidebarHeading";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import SubLink from "./SubLink";
import { SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../services/projectRequests";

const Sidebar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const projects = useAppSelector((state) => state.projects.projects);
  const tickets = useAppSelector((state) => state.tickets.tickets);
  const isSidebarOpen = useAppSelector((state) => state.layout.isSidebarOpen);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!name.length) return;

    const dateNow = new Date(Date.now() - 2000).toISOString();

    const id = uuidv4();

    createProject(dispatch, {
      id,
      name,
      description: name,
      created_at: dateNow,
      updated_at: dateNow,
      color: "pink",
      tickets: [],
    });

    navigate(`/dashboard/projects/${id}`);

    setName("");
    setOpen(false);
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
          myKey="dashboard"
          name="Dashboard"
          icon={<HomeIcon className="w-6 h-6" />}
        />

        <SidebarLink
          to="tickets"
          myKey="tickets"
          name="My Tickets"
          badge={tickets?.length.toString()}
          icon={<TicketIcon className="w-6 h-6" />}
        />

        <SidebarHeading title="My Projects" />

        <SidebarLink
          name="All Projects"
          to="projects"
          myKey="projects"
          badge={projects?.length.toString()}
          icon={<ArchiveIcon className="w-6 h-6" />}
        />

        <div>
          {projects?.map((project) => (
            <SubLink
              key={project.id.toString()}
              myKey={project.id.toString()}
              project={project}
              to={`projects/${project.id}`}
            />
          ))}
        </div>

        {open && (
          <div className="flex flex-row items-center h-8 mb-2 px-4 rounded-lg text-gray-600 dark:text-gray-200">
            <span className="w-2 h-2 rounded-full ml-3"></span>
            <span className="ml-4 truncate">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Create a new project"
                  className="input input-bordered w-full max-w-xs input-sm input-accent"
                />
              </form>
            </span>
          </div>
        )}

        <SidebarAction
          name="New Project"
          icon={
            <PlusCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
          }
          onClick={() => setOpen(!open)}
        />

        <div className="mt-auto"></div>

        <SidebarHeading title="Account" />
        <SidebarAction
          name={`Logout (${user?.email.substring(0, 8)}...)`}
          icon={<LogoutIcon className="w-6 h-6 text-red-500" />}
          onClick={handleLogout}
        />
        <a
          href="https://www.ahmedhossam.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-slate-300 dark:bg-black w-full rounded-md p-1 mt-4"
        >
          Made with ❤ by <b className="text-sky-500">Ahmed Hossam</b>
        </a>
        <li className="py-4"></li>
      </ul>
    </div>
  );
};

export default Sidebar;
