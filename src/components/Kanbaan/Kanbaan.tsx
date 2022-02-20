import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import ProjectInterface from "../../types/ProjectInterface";
import TicketInterface from "../../types/TicketInterface";
import KanbaanCard from "./KanbaanCard";
import KanbaanColumn from "./KanbaanColumn";

const Kanbaan = ({ project }: { project: ProjectInterface }) => {
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

  useEffect(() => {
    setColumns(initialColumns);
  }, [project]);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <KanbaanColumn
                    title={column.title}
                    length={column.items.length}
                    isDraggingOver={snapshot.isDraggingOver}
                    status={id}
                    projectId={project.id}
                  >
                    {column.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <KanbaanCard
                              ticket={item}
                              isDragging={snapshot.isDragging}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </KanbaanColumn>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Kanbaan;
