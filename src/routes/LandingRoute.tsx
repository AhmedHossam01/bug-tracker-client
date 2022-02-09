import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const LandingRoute = () => {
  const user = useAppSelector((state) => state.auth.user);

  return user ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default LandingRoute;
