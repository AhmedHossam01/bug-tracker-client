import { CalendarIcon } from "@heroicons/react/outline";
import TicketInterface from "../../types/TicketInterface";
import calcTimeAgo from "../../utils/calcTimeAgo";

const KanbaanCard = ({
  ticket: { tags, name, description, created_at },
}: {
  ticket: TicketInterface;
}) => {
  return (
    <div className="rounded-md bg-slate-700 text-white dark:bg-slate-800 p-3">
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <div className="shadow-lg w-fit rounded-xl px-3 text-xs font-semibold py-1 bg-indigo-300 text-indigo-900">
            {tag}
          </div>
        ))}
      </div>
      <div className="mt-3">{name}</div>
      <div className="mt-1 text-sm text-slate-500">
        {description.substring(0, 50)}
        {description.length > 25 && "..."}
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2 text-sm text-slate-300 items-center">
          <CalendarIcon className="w-4 h-4 text-slate-500" />
          {calcTimeAgo(created_at)}
        </div>

        <img
          className="w-5 h-5 rounded-full"
          src="https://picsum.photos/200/200"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default KanbaanCard;
