// src/routes/publicRoutes.jsx
import { Route } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import Temples from "../pages/Temples.jsx";
import TempleDetailPage from "../pages/TempleDetailPage.jsx";
import Puja from "../pages/Puja.jsx";
import DashboardLogin from "../pages/DashboardLogin.jsx";
import Prasaad from "../pages/Prasaad.jsx";
import Library from "../pages/Library.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import SignUpRequest from "../pages/SignupRequest.jsx";
import PujaDetail from "../pages/PujaDetail.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import Astrology from "../pages/Astrology.jsx";
import PanditOnCall from "../pages/PanditOnCall.jsx";

export default [
  <Route path="/" element={<Layout />} key="layout">
    <Route index element={<HomePage />} />
    <Route path="temples" element={<Temples />} />
    <Route path="temples/:templeName" element={<TempleDetailPage />} />

    <Route path="Prasaad" element={<Prasaad />} />

    <Route path="library" element={<Library />} />

    <Route path="puja" element={<Puja />} />
    <Route path="puja/:pujaName" element={<PujaDetail />} />

    <Route path="/checkout" element={<CheckoutPage />} />

    <Route path="/astrology" element={<Astrology />} />

    <Route path="/panditJi" element={<PanditOnCall />} />



  </Route>,
  <Route path="login" element={<Login />} key="login" />,
  <Route path="signin" element={<Signup />} key="signin" />,
  <Route path="dashboard" element={<DashboardLogin />} key="dashboard-login" />,
  <Route path="signup-request" element={<SignUpRequest />} key="signup-request" />,
];