import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleSidebar } from "../../store/layoutSlice";
import Avatar from "./Avatar";
import HamburgerButton from "./HamburgerButton";
import Notifications from "./Notifications";

const Appbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.layout.isSidebarOpen);

  return (
    <div className="px-6 py-4 bg-white dark:bg-slate-700 dark:text-slate-100 flex justify-between">
      <HamburgerButton
        toggleSidebar={() => dispatch(toggleSidebar())}
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
