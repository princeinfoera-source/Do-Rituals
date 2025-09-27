// src/routes/adminRoutes.jsx
import React from "react";
import { Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import AddManager from "../pages/admin/AddManager.jsx";
import ApprovePriest from "../pages/admin/ApprovePriest.jsx";
import AddTemple from "../pages/admin/AddTemple.jsx";
import AddDeliveryPartner from "../pages/admin/AddDeliveryPartner.jsx";
import ViewManagers from "../pages/admin/ViewManagers.jsx";
import ViewPriests from "../pages/admin/ViewPriests.jsx";
import ViewTemples from "../pages/admin/ViewTemples.jsx";
import ViewDeliveryPartners from "../pages/admin/ViewDeliveryPartners.jsx";
import ViewUsers from "../pages/admin/ViewUsers.jsx";

export default [
  <Route path="admin" element={<AdminDashboard />} />,
  <Route path="add-manager" element={<AddManager />} />,
  <Route path="approve-priest" element={<ApprovePriest />} />,
  <Route path="add-temple" element={<AddTemple />} />,
  <Route path="add-delivery-partner" element={<AddDeliveryPartner />} />,
  <Route path="view-managers" element={<ViewManagers />} />,
  <Route path="view-priests" element={<ViewPriests />} />,
  <Route path="view-temples" element={<ViewTemples />} />,
  <Route path="view-delivery-partners" element={<ViewDeliveryPartners />} />,
  <Route path="view-users" element={<ViewUsers />} />,
];
