import { MenuAlt2Icon } from "@heroicons/react/outline";

const Appbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className="px-6 py-4 bg-white dark:bg-slate-700 dark:text-slate-100 flex justify-between">
      <button onClick={toggleSidebar}>
        <MenuAlt2Icon className="w-6 h-6" />
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
