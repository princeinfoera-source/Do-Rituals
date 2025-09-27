// src/routes/publicRoutes.jsx
import { Route } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";
import HomePage from "../pages/user/HomePage.jsx";
import Temples from "../pages/Temples.jsx";
import TempleDetailPage from "../pages/TempleDetailPage.jsx";
import DashboardLogin from "../pages/DashboardLogin.jsx";

export default [
  <Route path="/" element={<Layout />} key="layout">
    <Route index element={<HomePage />} />
    <Route path="temples" element={<Temples />} />
    <Route path="temples/:templeName" element={<TempleDetailPage />} />
  </Route>,
  <Route path="dashboard" element={<DashboardLogin />} key="dashboard-login" />,
];
