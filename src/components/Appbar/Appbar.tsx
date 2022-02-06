import Avatar from "./Avatar";
import HamburgerButton from "./HamburgerButton";
import Notifications from "./Notifications";

const Appbar = ({
  toggleSidebar,
  isSidebarOpen,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) => {
  return (
    <div className="px-6 py-4 bg-white dark:bg-slate-700 dark:text-slate-100 flex justify-between">
      <HamburgerButton
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex items-center gap-x-2">
        <Notifications />

        <Avatar />
      </div>
    </div>
  );
};

export default Appbar;
