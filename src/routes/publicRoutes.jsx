// src/routes/publicRoutes.jsx
import { Route } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";
import HomePage from "../pages/public/homepage/HomePage.jsx";
import Temples from "../pages/public/temple/Temples.jsx";
import TempleDetailPage from "../pages/public/temple/TempleDetailPage.jsx";
import Puja from "../pages/public/puja/Puja.jsx";
import DashboardLogin from "../pages/public/auth/DashboardLogin.jsx";
import Prasaad from "../pages/public/prasaad/Prasaad.jsx";
import Library from "../pages/public/library/Library.jsx";
import Login from "../pages/public/auth/Login.jsx";
import Signup from "../pages/public/auth/Signup.jsx";
import SignUpRequest from "../pages/public/auth/SignupRequest.jsx";
import PujaDetail from "../pages/public/puja/PujaDetail.jsx";
import CheckoutPage from "../pages/public/puja/CheckoutPage.jsx";
import Astrology from "../pages/public/astrology/Astrology.jsx";
import PanditOnCall from "../pages/public/panditOnCall/PanditOnCall.jsx";

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