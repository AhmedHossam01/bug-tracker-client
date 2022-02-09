import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  // TODO: Fake auth
  let auth = { user: true };

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
