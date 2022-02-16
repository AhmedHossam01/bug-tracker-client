import { NavLink } from "react-router-dom";
import ProjectInterface from "../../types/ProjectInterface";

const SubLink = ({
  project: { color, name },
  to,
  key,
}: {
  project: ProjectInterface;
  to: string;
  key: string;
}) => {
  return (
    <li className="my-px">
      <NavLink
        to={to}
        key={key}
        className={({ isActive }) =>
          `flex flex-row items-center h-8 mb-2 px-4 rounded-lg text-gray-600 dark:text-gray-200 ${
            isActive && "dark:bg-slate-900 text-blue-500"
          }`
        }
      >
        <span
          className={`w-2 h-2 rounded-full ml-3`}
          style={{ backgroundColor: color }}
        ></span>
        <span className="ml-4 truncate">{name}</span>
      </NavLink>
    </li>
  );
};

export default SubLink;
