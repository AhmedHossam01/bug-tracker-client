import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { closeFromLink } from "../../store/layoutSlice";

const SiedebarItem = ({ name, icon, badge, to, myKey }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <li className="my-px">
      <NavLink
        onClick={() => dispatch(closeFromLink())}
        to={to}
        end
        key={myKey}
        className={({ isActive }) =>
          `flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 dark:text-gray-200 ${
            isActive
              ? "dark:bg-gray-700 bg-slate-300"
              : "hover:dark:bg-gray-700 hover:bg-slate-300"
          }`
        }
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
      </NavLink>
    </li>
  );
};

interface IProps {
  to: string;
  key?: string;
  name: string;
  icon: ReactElement;
  badge?: string;
  myKey: string;
}

export default SiedebarItem;
