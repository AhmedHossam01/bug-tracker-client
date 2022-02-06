import { ClockIcon } from "@heroicons/react/outline";

const DashboardProjectCard = () => {
  return (
    <div className="bg-indigo-500 text-white p-2 rounded-md  min-h-28 text-5xl">
      My bug tracker
      <div className="text-gray-300 text-sm mt-3 flex items-center gap-x-1">
        <ClockIcon className="w-4 h-4" />
        Last updated: an hour ago
      </div>
    </div>
  );
};

export default DashboardProjectCard;
