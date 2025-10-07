// src/routes/priestRoutes.jsx
import React from "react";
import { Route } from "react-router-dom";
import PriestDashboard from "../pages/priest/PriestDashboard.jsx";
import UpcomingPuja from "../pages/priest/UpcomingPuja.jsx";

export default [
  <Route path="priest" element={<PriestDashboard />} />,
  <Route path="upcoming-puja" element={<UpcomingPuja />} />,
];
