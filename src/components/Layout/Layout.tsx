import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchAllProjects } from "../../services/projectRequests";
import { fetchAllTickets } from "../../services/ticketRequests";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.layout.isDark);

  useEffect(() => {
    fetchAllProjects(dispatch);
    fetchAllTickets(dispatch);
  }, [dispatch]);

  return (
    <div
      className={`${isDark ? "dark" : ""} h-screen flex flex-col`}
      data-theme={isDark ? "dark" : "light"}
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
