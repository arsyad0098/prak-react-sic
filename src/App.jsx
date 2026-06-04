import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Layout tetap pakai import biasa
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

// Lazy Load Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders    = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
// --- TAMBAHAN UNTUK TUGAS PERTEMUAN 9 ---
const Products      = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Components    = React.lazy(() => import("./pages/Components")); 
// ----------------------------------------
const FiturXyz  = React.lazy(() => import("./pages/FiturXyz"));
const Login     = React.lazy(() => import("./pages/Login"));
const Register  = React.lazy(() => import("./pages/Register"));
const Forgot    = React.lazy(() => import("./pages/Forgot"));
const NotFound  = React.lazy(() => import("./pages/NotFound"));

import "./assets/tailwind.css";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        
        {/* Route dengan Sidebar & Header */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          
          {/* --- ROUTE BARU DISINI --- */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/components" element={<Components />} />
          <Route path="/fitur-xyz" element={<FiturXyz />} />
          {/* ------------------------- */}
        </Route>

        {/* Route Auth (Tanpa Sidebar) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}