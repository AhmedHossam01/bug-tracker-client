import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  // TODO: Fake auth
  let auth = { user: true };

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
