import { MenuAlt2Icon } from "@heroicons/react/outline";

const Appbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className="px-6 py-4 bg-slate-200 dark:bg-slate-700 dark:text-slate-100 flex">
      <button onClick={toggleSidebar}>
        <MenuAlt2Icon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Appbar;
