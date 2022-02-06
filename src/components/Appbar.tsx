import { BellIcon } from "@heroicons/react/outline";

const Appbar = ({
  toggleSidebar,
  isSidebarOpen,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) => {
  return (
    <div className="px-6 py-4 bg-white dark:bg-slate-700 dark:text-slate-100 flex justify-between">
      <button onClick={toggleSidebar} name="hamburger-menu">
        <div className="w-7 h-6 flex flex-col justify-around">
          <div className="w-full h-[3px] bg-slate-600 dark:bg-slate-300 rounded-md"></div>
          <div className="w-full h-[3px] bg-slate-600 dark:bg-slate-300 rounded-md"></div>
          <div
            className={`h-[3px] bg-slate-600 dark:bg-slate-300 rounded-md transition-[width] ${
              isSidebarOpen ? "w-1/2 md:w-full" : "md:w-1/2 w-full"
            }`}
          ></div>
        </div>
      </button>

      <div className="flex items-center gap-x-2">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-square btn-ghost">
            <BellIcon className="w-6 h-6" />
          </button>

          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box hidden flex-col gap-y-4 md:flex md:w-[30rem] overflow-auto max-h-56"
          >
            <li className="flex justify-between p-1 flex-row items-center gap-x-3">
              <div className="avatar">
                <div className="rounded-btn w-10 h-10">
                  <img
                    src="https://avatars.githubusercontent.com/u/50014916?v=4"
                    alt="Ahmed  Hossam"
                  />
                </div>
              </div>
              <p>Ahmed Hossam sent you an invitation to project</p>
              <div className="flex-none">
                <button className="btn btn-sm btn-ghost mr-2">Cancel</button>
                <button className="btn btn-sm btn-primary">Approve</button>
              </div>
            </li>
          </ul>
        </div>

        <div className="avatar">
          <div className="h-10 w-10 mask mask-squircle">
            <img
              src="https://avatars.githubusercontent.com/u/50014916?v=4"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
