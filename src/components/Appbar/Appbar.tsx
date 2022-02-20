import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleSidebar } from "../../store/layoutSlice";
import Avatar from "./Avatar";
import HamburgerButton from "./HamburgerButton";
import { toggleIsDark } from "../../store/layoutSlice";

const Appbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.layout.isSidebarOpen);
  const isDark = useAppSelector((state) => state.layout.isDark);
  const isDarkToggled = useAppSelector((state) => state.layout.isDarkToggled);

  return (
    <div className="px-6 py-4 bg-white dark:bg-slate-700 dark:text-slate-100 flex justify-between">
      <HamburgerButton
        toggleSidebar={() => dispatch(toggleSidebar())}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex items-center">
        <div
          onClick={() => dispatch(toggleIsDark())}
          className="mr-6 cursor-pointer relative"
        >
          {!isDarkToggled && (
            <span className="flex h-3 w-3 absolute -top-2 left-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          )}

          {isDark ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </div>

        <Avatar />
      </div>
    </div>
  );
};

export default Appbar;
