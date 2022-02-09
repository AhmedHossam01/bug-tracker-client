import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAuth;
