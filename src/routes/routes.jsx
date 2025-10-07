import { Routes, Route, Outlet, useParams, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/layoutRestricted/DashboardLayout.jsx";
import { useRole } from "../contexts/RoleContext.jsx";
import { rolePathMap } from "../utils/rolePathMap.js";

import HomePage from "../pages/HomePage.jsx";

import userPublicRoutes from "./publicRoutes.jsx";
import adminRoutes from "./adminRoutes.jsx";
import managerRoutes from "./managerRoutes.jsx";
import priestRoutes from "./priestRoutes.jsx";
import deliveryPartnerRoutes from "./deliveryPartnerRoutes.jsx";

import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import ManagerDashboard from "../pages/manager/ManagerDashboard.jsx";
import PriestDashboard from "../pages/priest/PriestDashboard.jsx";
import DeliveryPartnerDashboard from "../pages/delivery_partner/DeliveryPartnerDashboard.jsx";

function ProtectedRoute({ allowedRoles }) {
  const { role } = useRole();
  const { role: routeRole } = useParams();
  if (!role) return <Navigate to="/dashboard" replace />;
  if (!allowedRoles.includes(role)) return <Navigate to="/dashboard" replace />;
  if (routeRole && routeRole !== role) return <Navigate to={`/dashboard/${role}`} replace />;
  return <Outlet />;
}

function RoleBasedHome() {
  const { role } = useParams();
  switch (role) {
    case "admin":
      return <AdminDashboard />;
    case "manager":
      return <ManagerDashboard />;
    case "priest":
      return <PriestDashboard />;
    case "delivery-partner":
      return <DeliveryPartnerDashboard />;
    default:
      return <HomePage />;
  }
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public and user routes */}
      {userPublicRoutes}

      {/* Protected dashboard routes */}
      <Route element={<ProtectedRoute allowedRoles={Object.keys(rolePathMap)} />}>
        <Route path="dashboard/:role" element={<DashboardLayout />}>
          {/* Root index for dashboard role */}
          <Route index element={<RoleBasedHome />} />
          {/* Role specific routes */}
          {adminRoutes}
          {managerRoutes}
          {priestRoutes}
          {deliveryPartnerRoutes}
          {/* Panel-level catch-all redirect to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Route>

      {/* Global catch-all redirect to homepage (must come last) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
