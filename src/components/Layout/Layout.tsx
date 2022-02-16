import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { fetchAllProjects } from "../../services/projectRequests";
import { fetchAllTickets } from "../../services/ticketRequests";
import { useAppDispatch } from "../../store/hooks";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const dispatch = useAppDispatch();

  const [isDark, setIsDark] = useState(true);

  const handleKeyPress = (
    event: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  ) => {
    if (event.key === "Enter") {
      setIsDark(!isDark);
    }
  };

  useEffect(() => {
    fetchAllProjects(dispatch);
    fetchAllTickets(dispatch);
  }, [dispatch]);

  return (
    <div
      className={`${isDark ? "dark" : ""} h-screen flex flex-col`}
      data-theme={isDark ? "dark" : "light"}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <Appbar />

      <div className="bg-slate-200 dark:bg-slate-900 dark:text-slate-100 overflow-hidden flex">
        <Sidebar />
        <main className="w-full overflow-y-auto min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
