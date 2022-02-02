import { ReactElement } from "react";

const SiedebarItem = ({ active, name, icon, badge }: IProps) => {
  return (
    <li className="my-px">
      <a
        href="/"
        className={`flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 dark:text-gray-200 ${
          active
            ? "dark:bg-gray-700 bg-slate-300"
            : "hover:dark:bg-gray-700 hover:bg-slate-300"
        }`}
      >
        <span className="flex items-center justify-center text-lg text-gray-400">
          {icon}
        </span>
        <span className="ml-3">{name}</span>
        {badge && (
          <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 dark:bg-gray-500 dark:text-gray-300 h-6 px-2 rounded-full ml-auto">
            {badge}
          </span>
        )}
      </a>
    </li>
  );
};

interface IProps {
  active?: boolean;
  name: string;
  icon: ReactElement;
  badge?: string;
}

export default SiedebarItem;
