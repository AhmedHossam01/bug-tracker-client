import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const user = useAppSelector((state) => state.auth.user);
  let location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
