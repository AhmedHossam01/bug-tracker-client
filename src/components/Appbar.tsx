import { MenuAlt2Icon } from "@heroicons/react/outline";

const Appbar = ({
  toggleSidebar,
  isSidebarOpen,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) => {
  return (
    <div className="px-6 py-4 bg-white dark:bg-slate-700 dark:text-slate-100 flex justify-between">
      <button onClick={toggleSidebar}>
        <div className="w-7 h-6 flex flex-col justify-around">
          <div className="w-full h-[4px] bg-slate-600 dark:bg-slate-300 rounded-md"></div>
          <div className="w-full h-[4px] bg-slate-600 dark:bg-slate-300 rounded-md"></div>
          <div
            className={`h-[4px] bg-slate-600 dark:bg-slate-300 rounded-md transition-[width] ${
              isSidebarOpen ? "w-1/2 md:w-full" : "md:w-1/2 w-full"
            }`}
          ></div>
        </div>
      </button>

      <div className="avatar">
        <div className="h-10 w-10 mask mask-squircle">
          <img
            src="https://avatars.githubusercontent.com/u/50014916?v=4"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
