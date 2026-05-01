import React, { Suspense } from "react"; // WAJIB import Suspense juga
import { Route, Routes } from "react-router-dom";

// 1. Layout tetap pakai import biasa (karena ini kerangka utama)
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders    = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Login     = React.lazy(() => import("./pages/Login"));
const Register  = React.lazy(() => import("./pages/Register"));
const Forgot    = React.lazy(() => import("./pages/Forgot"));
const NotFound  = React.lazy(() => import("./pages/NotFound"));

import "./assets/tailwind.css";

export default function App() {
  return (
    /**
     * 3. WAJIB bungkus Routes dengan <Suspense>.
     * Tanpa ini, aplikasi bakal crash saat mencoba loading file lazy.
     */
    <Suspense fallback={<Loading />}>
      <Routes>
       
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}