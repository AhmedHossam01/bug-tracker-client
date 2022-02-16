import TicketInterface from "./TicketInterface";

export default interface ProjectInterface {
  id: string;
  name: string;
  description: string;
  color: string;
  updated_at: string;
  created_at: string;
  tickets?: TicketInterface[];
}
