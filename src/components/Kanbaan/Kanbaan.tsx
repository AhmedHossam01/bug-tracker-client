import { Dispatch, SetStateAction, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import ProjectInterface from "../../types/ProjectInterface";
import TicketInterface from "../../types/TicketInterface";
import KanbaanColumn from "./KanbaanColumn";

const Kanbaan = ({
  project,
  setProject,
}: {
  project: ProjectInterface;
  setProject: Dispatch<SetStateAction<ProjectInterface | null>>;
}) => {
  const initialColumns: {
    [key: string]: { title: string; items: TicketInterface[] | [] };
  } = {
    todo: {
      title: "to do",
      items:
        project?.tickets?.filter((ticket) => ticket.status === "todo") || [],
    },
    doing: {
      title: "doing",
      items:
        project?.tickets?.filter((ticket) => ticket.status === "doing") || [],
    },
    done: {
      title: "done",
      items:
        project?.tickets?.filter((ticket) => ticket.status === "done") || [],
    },
  };

  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([id, column]) => {
          return <Droppable droppableId={id}></Droppable>;
        })}
      </DragDropContext>
    </div>
  );
};

export default Kanbaan;
