import ProjectInterface from "./ProjectInterface";

export default interface TicketInterface {
  id: string;
  name: string;
  description: string;
  project_id: string;
  status: "todo" | "doing" | "done";
  tags: string[];
  created_at: string;
  project?: ProjectInterface;
}
