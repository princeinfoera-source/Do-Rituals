// src/App.jsx
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RoleProvider } from "./contexts/RoleContext.jsx";
import AppRoutes from "./routes/routes.jsx";

const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <RoleProvider>
        <AppRoutes />
      </RoleProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
