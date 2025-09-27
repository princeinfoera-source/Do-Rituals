// src/routes/deliveryPartnerRoutes.jsx
import React from "react";
import { Route } from "react-router-dom";
import DeliveryPartnerDashboard from "../pages/delivery_partner/DeliveryPartnerDashboard.jsx";
import UpcomingDelivery from "../pages/delivery_partner/UpcomingDelivery.jsx";

export default [
  <Route path="delivery-partner" element={<DeliveryPartnerDashboard />} />,
  <Route path="upcoming" element={<UpcomingDelivery />} />,
];
