import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginRoute from "./routes/LoginRoute";
import HomepageRoute from "./routes/Dashboard/HomepageRoute";
import NotFound from "./routes/Dashboard/NotFound";
import RequireAuth from "./components/Common/RequireAuth";
import LandingRoute from "./routes/LandingRoute";
import { useEffect } from "react";
import { findMeRequest } from "./services/authRequests";
import { useAppDispatch } from "./store/hooks";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      findMeRequest(dispatch);
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<LandingRoute />} />
          <Route path="/login" element={<LoginRoute />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<HomepageRoute />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
