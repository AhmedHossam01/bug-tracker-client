import { Link } from "react-router-dom";
import TicketInterface from "../../types/TicketInterface";
import calcTimeAgo from "../../utils/calcTimeAgo";

const DashboardTicketCard = ({
  ticket: { name, created_at, project },
}: {
  ticket: TicketInterface;
}) => {
  return (
    <div className="bg-slate-700 py-3 px-4 rounded-md text-white">
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{calcTimeAgo(created_at)}</p>
      </div>
      <Link to={`/dashboard/projects/${project?.id}`}>
        <div
          className="rounded md p-1 text-white w-fit mt-2"
          style={{ backgroundColor: project?.color }}
        >
          {project?.name} ago
        </div>
      </Link>
    </div>
  );
};

export default DashboardTicketCard;
