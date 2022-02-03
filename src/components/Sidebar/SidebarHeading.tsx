const SidebarHeading = ({ title }: { title: string }) => {
  return (
    <li className="my-px">
      <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase dark:text-gray-500">
        {title}
      </span>
    </li>
  );
};

export default SidebarHeading;
