import { ClockIcon } from "@heroicons/react/outline";
import ProjectInterface from "../../types/ProjectInterface";
import calcTimeAgo from "../../utils/calcTimeAgo";

const DashboardProjectCard = ({
  project: { name, color, updated_at },
}: {
  project: ProjectInterface;
}) => {
  return (
    <div className="group relative shadow-lg dark:shadow-slate-800 bg-slate-100 dark:bg-slate-800 dark:text-white rounded-sm text-slate-700 px-4 py-2 text-4xl flex flex-col justify-between">
      <div
        className="ease-out absolute h-full top-0 left-0 w-2 transition-[width] duration-500 group-hover:w-full"
        style={{ backgroundColor: color }}
      ></div>
      <div className="group-hover:text-white z-10 duration-500">
        {name.substring(0, 15)}
        {name.length > 15 && "..."}
        <div className="group-hover:text-white duration-500 transition-colors dark:text-gray-400 text-gray-500 text-sm mt-3 flex items-center gap-x-1">
          <ClockIcon className="w-4 h-4" />
          Updated {calcTimeAgo(updated_at)}
        </div>
      </div>
    </div>
  );
};

export default DashboardProjectCard;
