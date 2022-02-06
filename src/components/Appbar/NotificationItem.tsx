const NotificationItem = () => {
  return (
    <li className="flex justify-between p-1 flex-row items-center gap-x-3">
      <div className="avatar">
        <div className="rounded-btn w-10 h-10">
          <img
            src="https://avatars.githubusercontent.com/u/50014916?v=4"
            alt="Ahmed  Hossam"
          />
        </div>
      </div>
      <p>Ahmed Hossam sent you an invitation to project</p>
      <div className="flex-none">
        <button className="btn btn-sm btn-ghost mr-2">Cancel</button>
        <button className="btn btn-sm btn-primary">Approve</button>
      </div>
    </li>
  );
};

export default NotificationItem;
