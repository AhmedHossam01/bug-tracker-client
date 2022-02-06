const DashboardTicketCard = () => {
  return (
    <div className="bg-slate-700 py-3 px-4 rounded-md text-white">
      <div className="flex justify-between">
        <p>This's my first ticket</p>
        <p>1 day ago</p>
      </div>
      <div className="bg-indigo-500 rounded md p-1 text-white w-fit mt-2">
        My bug tracker
      </div>
    </div>
  );
};

export default DashboardTicketCard;
