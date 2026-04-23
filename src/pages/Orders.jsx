import Header from "../layouts/Header";
// Simpan import icon yang mungkin kamu butuhkan nanti untuk statistik atau list
import { FiUsers, FiUserPlus, FiUserCheck } from "react-icons/fi"; 

export default function Orders() {
    return (
        <div className="flex-1 bg-[#F9FAFB] min-h-screen flex flex-col font-sans">
            {/* Header tetap dipertahankan agar navigasi konsisten */}
            <Header />

            <div className="p-8">
                {/* Title Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Customer</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage your customers and their activities here.</p>
                </div>
            </div>
        </div>
    );
}