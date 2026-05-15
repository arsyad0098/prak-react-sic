import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar tetap di kiri */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header dipanggil sekali di sini untuk semua halaman */}
        <Header />

        {/* Konten halaman (Dashboard, dll) muncul di sini */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}