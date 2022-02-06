import { ReactElement } from "react";

const DashboardTitle = ({
  title,
  icon,
}: {
  title: String;
  icon: ReactElement;
}) => {
  return (
    <div className="flex gap-x-2 items-center">
      <div className="w-6 h-6">{icon}</div>
      <h2 className="text-xl uppercase font-semibold">{title}</h2>
    </div>
  );
};

export default DashboardTitle;
