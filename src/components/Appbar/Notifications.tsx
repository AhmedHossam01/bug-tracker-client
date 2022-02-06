import { BellIcon } from "@heroicons/react/outline";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        className="btn btn-square btn-ghost"
        data-testid="notificationBtn"
      >
        <BellIcon className="w-6 h-6" />
      </button>

      <ul
        tabIndex={0}
        className="p-2 shadow menu dropdown-content bg-base-100 rounded-box hidden flex-col gap-y-4 md:flex md:w-[30rem] overflow-auto max-h-56"
      >
        <NotificationItem />
      </ul>
    </div>
  );
};

export default Notifications;
