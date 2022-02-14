import { ClockIcon } from "@heroicons/react/outline";
import ProjectInterface from "../../types/ProjectInterface";
import calcTimeAgo from "../../utils/calcTimeAgo";

const DashboardProjectCard = ({
  project: { name, color, updated_at },
}: {
  project: ProjectInterface;
}) => {
  return (
    <div
      className={`bg-${color}-500 text-white p-2 rounded-md h-24 text-4xl truncate flex flex-col justify-between`}
    >
      {name}
      <div className="text-gray-100 text-sm mt-3 flex items-center gap-x-1">
        <ClockIcon className="w-4 h-4" />
        Updated {calcTimeAgo(updated_at)}
      </div>
    </div>
  );
};

export default DashboardProjectCard;
