import ProjectInterface from "../../types/ProjectInterface";
import KanbaanColumn from "./KanbaanColumn";

const Kanbaan = ({ project }: { project: ProjectInterface }) => {
  const todoTickets = project?.tickets?.filter(
    (ticket) => ticket.status === "todo"
  );
  const doingTickets = project?.tickets?.filter(
    (ticket) => ticket.status === "doing"
  );
  const doneTickets = project?.tickets?.filter(
    (ticket) => ticket.status === "done"
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* {todoTickets && <KanbaanColumn title="todo" tickets={todoTickets} />}
      {doingTickets && <KanbaanColumn title="doing" tickets={doingTickets} />}
      {doneTickets && <KanbaanColumn title="done" tickets={doneTickets} />} */}
    </div>
  );
};

export default Kanbaan;
