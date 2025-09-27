// src/routes/managerRoutes.jsx
import React from "react";
import { Route } from "react-router-dom";
import ManagerDashboard from "../pages/manager/ManagerDashboard.jsx";
import EnrollPriest from "../pages/manager/EnrollPriest.jsx";

export default [
  <Route path="manager" element={<ManagerDashboard />} />,
  <Route path="enroll-priest" element={<EnrollPriest />} />,
];
