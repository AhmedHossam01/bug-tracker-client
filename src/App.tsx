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
import Project from "./routes/Dashboard/Project";
import MyTickets from "./routes/Dashboard/MyTickets";
import Register from "./routes/Register";
import { useJwt } from "react-jwt";

const App = () => {
  const token = localStorage.getItem("token") || "";
  const { isExpired } = useJwt(token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token && !isExpired) {
      findMeRequest(dispatch);
    }
  }, [dispatch, token, isExpired]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

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
          <Route path="projects/:id" element={<Project />} />
          <Route path="tickets" element={<MyTickets />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
