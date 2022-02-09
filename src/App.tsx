import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginRoute from "./routes/LoginRoute";
import HomepageRoute from "./routes/Dashboard/HomepageRoute";
import NotFound from "./routes/Dashboard/NotFound";
import RequireAuth from "./components/Common/RequireAuth";
import LandingRoute from "./routes/LandingRoute";

const App = () => {
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
