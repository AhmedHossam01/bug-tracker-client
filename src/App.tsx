import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRoute from "./routes/LoginRoute";
import HomepageRoute from "./routes/Dashboard/HomepageRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRoute />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<HomepageRoute />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Route>

        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
