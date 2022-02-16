import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Homepage from "./routes/Dashboard/Homepage";
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
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Homepage />} />
          <Route path="projects" element={<AllProjects />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
