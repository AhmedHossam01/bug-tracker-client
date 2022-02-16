import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRoute from "./routes/LoginRoute";
import HomepageRoute from "./routes/Dashboard/HomepageRoute";
import NotFound from "./routes/Dashboard/NotFound";
import RequireAuth from "./components/Common/RequireAuth";
import { useEffect } from "react";
import { findMeRequest } from "./services/authRequests";
import { useAppDispatch } from "./store/hooks";
import AllProjects from "./routes/Dashboard/AllProjects";

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
        <Route path="/" element={<LoginRoute />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <HomepageRoute />
              </RequireAuth>
            }
          />
          <Route
            path="projects"
            element={
              <RequireAuth>
                <AllProjects />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
