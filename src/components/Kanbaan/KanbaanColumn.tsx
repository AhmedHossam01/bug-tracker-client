import { PlusIcon } from "@heroicons/react/outline";
import { Dispatch, FC, SetStateAction, SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "react-taggables-input/dist/tags.css";
import { faker } from "@faker-js/faker";
import TicketInterface from "../../types/TicketInterface";

const KanbaanColumn: FC<{
  title: string;
  length: number;
  isDraggingOver: boolean;
  status: string;
  projectId: string;
  columns: { [key: string]: { title: string; items: [] | TicketInterface[] } };
  setColumns: Dispatch<
    SetStateAction<{
      [key: string]: { title: string; items: TicketInterface[] | [] };
    }>
  >;
}> = ({
  title,
  length,
  children,
  isDraggingOver,
  status,
  columns,
  projectId,
  setColumns,
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const dateNow = new Date(Date.now() - 2000).toISOString();

    const newColumns = JSON.parse(JSON.stringify(columns));
    newColumns[status].items.unshift({
      id: uuidv4(),
      project_id: projectId,
      tags: [],
      description: name,
      created_at: dateNow,
      name,
      // @ts-ignore
      status,
      assignee: faker.image.avatar(),
    });

    setColumns(newColumns);

    setName("");
    setOpen(false);
  };

  return (
    <div
      className={
        isDraggingOver
          ? "w-full h-full p-4 bg-slate-300 dark:bg-slate-700"
          : "w-full h-full"
      }
    >
      <div className="flex justify-between items-center">
        <div className="uppercase text-lg font-bold text-slate-700 dark:text-slate-300 flex items-center">
          {title}
          <span className="p-[8px] ml-2 text-sm bg-blue-300 rounded-md text-slate-800 w-5 h-5 flex justify-center items-center">
            {length}
          </span>
        </div>
        <div
          className="text-green-700 hover:bg-green-700 hover:text-white w-6 h-6 rounded-md flex items-center justify-center cursor-pointer transition-colors"
          onClick={() => setOpen(true)}
        >
          <PlusIcon className="w-4 h-4" />
        </div>
      </div>
      {open && (
        <div className="mt-4">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              required
              placeholder="Type here"
              className="input w-full max-w-xs"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button type="submit" className="btn btn-success mt-3 btn-sm">
              Add
            </button>
          </form>
        </div>
      )}
      <div className="mt-6 flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default KanbaanColumn;
