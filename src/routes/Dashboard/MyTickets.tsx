import { TicketIcon } from "@heroicons/react/outline";
import DashboardTitle from "../../components/Dashboard/ItemsTitle";
import DashboardTicketCard from "../../components/Dashboard/TicketCard";
import { useAppSelector } from "../../store/hooks";

const MyTickets = () => {
  const tickets = useAppSelector((state) => state.tickets.tickets);

  return (
    <div className="customContainer">
      <DashboardTitle title="My Tickets" icon={<TicketIcon />} />

      <div className="flex flex-col gap-4 mt-8">
        {tickets &&
          tickets.map((ticket) => <DashboardTicketCard ticket={ticket} />)}
      </div>
    </div>
  );
};

export default MyTickets;
