import { PlusIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { useAppDispatch } from "../../store/hooks";
import { updateNewTicket } from "../../store/projectsSlice";

const KanbaanColumn: FC<{
  title: string;
  length: number;
  isDraggingOver: boolean;
  status: string;
}> = ({ title, length, children, isDraggingOver, status }) => {
  const dispatch = useAppDispatch();

  const addNewTicket = () => {
    dispatch(
      updateNewTicket({
        id: "54345",
        project_id: "1",
        tags: [],
        description: "trtrt",
        created_at: "1212",
        name: "test",
        // @ts-ignore
        status,
      })
    );
  };

  return (
    <div
      className={
        isDraggingOver
          ? "w-full h-full p-4 bg-slate-300 dark:bg-slate-700"
          : "w-full h-full p-4"
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
          className="text-green-700 hover:bg-green-700 hover:text-white w-5 h-5 rounded-md flex items-center justify-center cursor-pointer transition-colors"
          onClick={addNewTicket}
        >
          <PlusIcon />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default KanbaanColumn;
