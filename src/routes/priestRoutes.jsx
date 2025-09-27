// src/routes/priestRoutes.jsx
import React from "react";
import { Route } from "react-router-dom";
import PriestDashboard from "../pages/priest/PriestDashboard.jsx";
import UpcomingPooja from "../pages/priest/UpcomingPooja.jsx";

export default [
  <Route path="priest" element={<PriestDashboard />} />,
  <Route path="upcoming-pooja" element={<UpcomingPooja />} />,
];
