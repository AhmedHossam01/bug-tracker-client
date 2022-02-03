import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";

const App = () => {
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
        <div className="w-full overflow-y-auto p-8">
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
          <div className="">test</div>
        </div>
      </div>
    </div>
  );
};

export default App;
