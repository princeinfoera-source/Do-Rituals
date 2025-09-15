import React, { useState } from "react";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import TempleManagerDashboard from "../roles/TempleManager/TempleManagerDashboard.jsx";
import PristDashboard from "../roles/Prist/PristDashboard.jsx";
import DeliveryPartnerDashboard from "../roles/DeliveryPartner/DeliveryPartnerDashboard.jsx";

const RoleSelector = () => {
  const [role, setRole] = useState("Admin");

  const renderDashboard = () => {
    switch (role) {
      case "Admin":
        return <AdminDashboard />;
      case "TempleManager":
        return <TempleManagerDashboard />;
      case "Prist":
        return <PristDashboard />;
      case "DeliveryPartner":
        return <DeliveryPartnerDashboard />;
      default:
        return <div>Select a role</div>;
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="role" className="mr-2 font-semibold">Select Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-1 rounded"
        >
          <option value="Admin">Admin</option>
          <option value="TempleManager">Temple Manager</option>
          <option value="Prist">Prist</option>
          <option value="DeliveryPartner">Delivery Partner</option>
        </select>
      </div>
      <div>{renderDashboard()}</div>
    </div>
  );
};

export default RoleSelector;
