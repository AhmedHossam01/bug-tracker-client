import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-8">
      <h2 className="text-5xl mb-4">There's nothing here 😁</h2>
      Go to:{" "}
      <Link to="/dashboard" className="text-blue-500">
        Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
