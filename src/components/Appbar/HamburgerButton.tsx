const HamburgerButton = ({
  toggleSidebar,
  isSidebarOpen,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) => {
  return (
    <button onClick={toggleSidebar} data-testid="hamburgerBtn">
      <div className="w-7 h-6 flex flex-col justify-around">
        <div className="w-full h-[3px] bg-slate-600 dark:bg-slate-300 rounded-md"></div>
        <div className="w-full h-[3px] bg-slate-600 dark:bg-slate-300 rounded-md"></div>
        <div
          className={`h-[3px] bg-slate-600 dark:bg-slate-300 rounded-md transition-[width] ${
            isSidebarOpen ? "w-1/2 md:w-full" : "md:w-1/2 w-full"
          }`}
        ></div>
      </div>
    </button>
  );
};

export default HamburgerButton;
