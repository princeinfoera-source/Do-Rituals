// src/App.jsx
import {
  Routes,
  Route,
  Navigate,
  useParams,
  Outlet,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Layout from "./layouts/Layout.jsx";
import DashboardLayout from "./layouts/layoutRestricted/DashboardLayout.jsx";
import HomePage from "./pages/user/HomePage.jsx";
import TemplePage from "./pages/Temple.jsx";
import DashboardLogin from "./pages/DashboardLogin.jsx";
import { RoleProvider, useRole } from "./contexts/RoleContext.jsx";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AddManager from "./pages/admin/AddManager.jsx";
import ApprovePriest from "./pages/admin/ApprovePriest.jsx";
import AddTemple from "./pages/admin/AddTemple.jsx";
import AddDeliveryPartner from "./pages/admin/AddDeliveryPartner.jsx";
import ViewManagers from "./pages/admin/ViewManagers.jsx";
import ViewPriests from "./pages/admin/ViewPriests.jsx";
import ViewTemples from "./pages/admin/ViewTemples.jsx";
import ViewDeliveryPartners from "./pages/admin/ViewDeliveryPartners.jsx";
import ViewUsers from "./pages/admin/ViewUsers.jsx";

// Manager
import ManagerDashboard from "./pages/manager/ManagerDashboard.jsx";
import EnrollPriest from "./pages/manager/EnrollPriest.jsx";

// Priest
import PriestDashboard from "./pages/priest/PriestDashboard.jsx";
import UpcomingPooja from "./pages/priest/UpcomingPooja.jsx";

// Delivery Partner
import DeliveryPartnerDashboard from "./pages/delivery_partner/DeliveryPartnerDashboard.jsx";
import UpcomingDelivery from "./pages/delivery_partner/UpcomingDelivery.jsx";

import { rolePathMap } from "./utils/rolePathMap.js";

const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <RoleProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="temples/:templeName" element={<TemplePage />} />
        </Route>
          {/* Dashboard login */}
          <Route path="dashboard" element={<DashboardLogin />} />

          {/* Protected dashboard routes */}
          <Route
            element={
              <ProtectedRoute
                allowedRoles={Object.keys(rolePathMap)} // ✅ admin, manager, priest, delivery-partner
              />
            }
          >
            <Route path="dashboard/:role" element={<DashboardLayout />}>
              <Route index element={<RoleBasedHome />} />

              {/* Admin routes */}
              <Route path="add-manager" element={<AddManager />} />
              <Route path="approve-priest" element={<ApprovePriest />} />
              <Route path="add-temple" element={<AddTemple />} />
              <Route path="add-delivery-partner" element={<AddDeliveryPartner />} />
              <Route path="view-managers" element={<ViewManagers />} />
              <Route path="view-priests" element={<ViewPriests />} />
              <Route path="view-temples" element={<ViewTemples />} />
              <Route path="view-delivery-partners" element={<ViewDeliveryPartners />} />
              <Route path="view-users" element={<ViewUsers />} />

              {/* Manager routes */}
              <Route path="enroll-priest" element={<EnrollPriest />} />

              {/* Priest routes */}
              <Route path="upcoming-pooja" element={<UpcomingPooja />} />

              {/* Delivery Partner routes */}
              <Route path="upcoming" element={<UpcomingDelivery />} />

              {/* Dashboards */}
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="manager" element={<ManagerDashboard />} />
              <Route path="priest" element={<PriestDashboard />} />
              <Route path="delivery-partner" element={<DeliveryPartnerDashboard />} />

              <Route path="*" element={<NoMatch />} />
            </Route>
          </Route>
        </Routes>
      </RoleProvider>
    </GoogleOAuthProvider>
  );
}

function NoMatch() {
  return (
    <div className="p-6 text-center text-red-600">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
    </div>
  );
}

// ✅ Updated ProtectedRoute
function ProtectedRoute({ allowedRoles }) {
  const { role } = useRole();
  const { role: routeRole } = useParams();

  if (!role) {
    // not logged in
    return <Navigate to="/dashboard" replace />;
  }

  if (!allowedRoles.includes(role)) {
    // role not authorized
    return <Navigate to="/dashboard" replace />;
  }

  if (routeRole && routeRole !== role) {
    // URL role mismatch → redirect to correct dashboard
    return <Navigate to={`/dashboard/${role}`} replace />;
  }

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
      return <div className="p-6 text-red-500">Invalid role</div>;
  }
}

export default App;
