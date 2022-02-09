import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRoute from "./routes/LoginRoute";
import HomepageRoute from "./routes/Dashboard/HomepageRoute";
import NotFound from "./routes/Dashboard/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginRoute />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<HomepageRoute />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
