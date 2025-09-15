import { NavLink } from "react-router-dom";
import {
  Home,
  UserPlus,
  UserCheck,
  Building,
  Truck,
  Users,
  X,
} from "lucide-react";

export function getSidebarLinks(role) {
  if (role === "admin") {
    return [
      { path: "", label: "Home", icon: <Home size={18} /> },
      { path: "add-manager", label: "Add Manager", icon: <UserPlus size={18} /> },
      { path: "approve-priest", label: "Approve Priest", icon: <UserCheck size={18} /> },
      { path: "add-temple", label: "Add Temple", icon: <Building size={18} /> },
      { path: "add-delivery-partner", label: "Add Delivery Partner", icon: <Truck size={18} /> },
      { path: "view-managers", label: "View All Managers", icon: <Users size={18} /> },
      { path: "view-priests", label: "View All Priests", icon: <Users size={18} /> },
      { path: "view-temples", label: "View All Temples", icon: <Building size={18} /> },
      { path: "view-delivery-partners", label: "View All Delivery Partners", icon: <Truck size={18} /> },
      { path: "view-users", label: "View All Users", icon: <Users size={18} /> },
    ];
  } else if (role === "manager") {
    return [
      { path: "", label: "Home", icon: <Home size={18} /> },
      { path: "enroll-priest", label: "Enroll Priest", icon: <UserPlus size={18} /> },
    ];
  } else if (role === "priest") {
    return [
      { path: "", label: "Home", icon: <Home size={18} /> },
      { path: "upcoming-pooja", label: "Upcoming Pooja", icon: <UserCheck size={18} /> },
    ];
  } else if (role === "delivery-partner") {
    return [
      { path: "", label: "Home", icon: <Home size={18} /> },
      { path: "upcoming", label: "Upcoming Delivery", icon: <Truck size={18} /> },
    ];
  }
  return [];
}

function Sidebar({ role, isOpen, onClose }) {
  const links = getSidebarLinks(role);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40"
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-gray-200 flex flex-col shadow-lg transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        aria-label="Sidebar navigation"
      >
        {/* Mobile header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 md:hidden">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1 rounded hover:bg-gray-700"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {links.map(({ path, label, icon }) => (
            <li key={path || "home"}>
              <NavLink
                to={path ? `/dashboard/${role}/${path}` : `/dashboard/${role}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-gray-700 hover:text-white"
                  }`
                }
                end={path === ""}
                onClick={onClose} // Close sidebar on link click (mobile)
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
