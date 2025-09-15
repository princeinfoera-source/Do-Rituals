import { useState } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import Sidebar, { getSidebarLinks } from "../layoutRestricted/Sidebar";
import HeaderRestricted from "../layoutRestricted/HeaderRestricted";
import FooterRestricted from "../layoutRestricted/FooterRestricted";

const DashboardLayout = () => {
  const { role } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = getSidebarLinks(role);

  if (links.length === 0) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Pass onMenuClick to toggle sidebar */}
      <HeaderRestricted onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          role={role}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex-1 bg-gray-50 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
      <FooterRestricted />
    </div>
  );
};

export default DashboardLayout;
