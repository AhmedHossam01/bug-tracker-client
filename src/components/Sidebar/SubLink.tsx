import ProjectInterface from "../../types/ProjectInterface";

const SubLink = ({
  project: { color, name },
}: {
  project: ProjectInterface;
}) => {
  return (
    <li className="my-px">
      <div
        className={`flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 dark:text-gray-200`}
      >
        <span
          className={`w-2 h-2 rounded-full ml-3`}
          style={{ backgroundColor: color }}
        ></span>
        <span className="ml-4 truncate">{name}</span>
      </div>
    </li>
  );
};

export default SubLink;
