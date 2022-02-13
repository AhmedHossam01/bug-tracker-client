import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { fetchAllProjects } from "../../services/contentRequests";
import { useAppDispatch } from "../../store/hooks";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const dispatch = useAppDispatch();

  const [isDark, setIsDark] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleKeyPress = (
    event: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  ) => {
    if (event.key === "Enter") {
      setIsDark(!isDark);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    fetchAllProjects(dispatch);
  }, [dispatch]);

  return (
    <div
      className={`${isDark ? "dark" : ""} h-screen flex flex-col`}
      data-theme={isDark ? "dark" : "light"}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <Appbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="bg-slate-200 dark:bg-slate-900 dark:text-slate-100 overflow-hidden flex">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className="w-full overflow-y-auto min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
