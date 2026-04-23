import { Link } from "react-router-dom";
import Header from "../layouts/Header";

export default function NotFound() {
  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen flex flex-col font-sans">
      {/* Header tetap ada */}
      <Header />

      {/* Content */}
      <div className="flex flex-1 items-center justify-center px-8">
        <div className="text-center max-w-md">
          {/* 404 Text */}
          <h1 className="text-7xl font-extrabold text-teal-500 mb-4">404</h1>

          {/* Message */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
          </p>

          {/* Button */}
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition"
          >
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
