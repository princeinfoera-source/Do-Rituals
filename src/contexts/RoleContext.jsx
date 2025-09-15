// src/contexts/RoleContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const RoleContext = createContext(null);

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};

export const RoleProvider = ({ children }) => {
  // ✅ Persisted role
  const [role, setRole] = useState(() => localStorage.getItem("role") || null);

  // Other states
  const [templeManagers, setTempleManagers] = useState([]);
  const [priests, setPriests] = useState([]);
  const [pendingPriests, setPendingPriests] = useState([]);
  const [deliveryPartners, setDeliveryPartners] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [deliveries, setDeliveries] = useState([]);

  // ✅ Keep role synced with localStorage
  useEffect(() => {
    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
  }, [role]);

  // Functions
  const addTempleManager = (manager) =>
    setTempleManagers((prev) => [...prev, manager]);

  const removeTempleManager = (id) =>
    setTempleManagers((prev) => prev.filter((m) => m.id !== id));

  const enrollPriest = (priest) =>
    setPriests((prev) => [...prev, priest]);

  const approvePriest = (priestId) => {
    setPendingPriests((prev) => prev.filter((p) => p.id !== priestId));
    // Add to approved priests if needed
  };

  const removePriest = (priestId) =>
    setPriests((prev) => prev.filter((p) => p.id !== priestId));

  const addDeliveryPartner = (partner) =>
    setDeliveryPartners((prev) => [...prev, partner]);

  const removeDeliveryPartner = (id) =>
    setDeliveryPartners((prev) => prev.filter((d) => d.id !== id));

  const addBooking = (booking) =>
    setBookings((prev) => [...prev, booking]);

  const addDelivery = (delivery) =>
    setDeliveries((prev) => [...prev, delivery]);

  // Context value
  const value = {
    role,
    setRole,
    templeManagers,
    priests,
    pendingPriests,
    deliveryPartners,
    bookings,
    deliveries,
    addTempleManager,
    removeTempleManager,
    enrollPriest,
    approvePriest,
    removePriest,
    addDeliveryPartner,
    removeDeliveryPartner,
    addBooking,
    addDelivery,
  };

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
};
