import { useState } from "react";
import PageHeader from "../components/PageHeader"; 
import { FiUsers, FiUserPlus, FiUserCheck, FiSearch } from "react-icons/fi"; 
// Import data JSON dari mockData
import { customersData } from "../data/mockData"; 

export default function Customers() {
    // Simpan data di state agar nanti bisa dimanipulasi (tambah/hapus)
    const [customers, setCustomers] = useState(customersData);

    return (
        <div className="flex-1 bg-[#F9FAFB] min-h-screen flex flex-col font-sans">
            
            <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
                {/* Search Bar */}
                <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 hover:border-teal-300 transition-colors focus-within:border-teal-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-50">
                    <FiSearch className="text-gray-400 text-lg" />
                    <input type="text" placeholder="Search customers..." className="bg-transparent border-none outline-none ml-2 text-sm w-48 text-gray-700 placeholder-gray-400" />
                </div>
                {/* Tombol Add Customer */}
                <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:-translate-y-0.5 transition-all">
                    <FiUserPlus className="text-lg" />
                    Add Customer
                </button>
            </PageHeader>

            <div className="p-8">
                
                {/* Statistik Card (Diaktifkan kembali) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-500 rounded-lg"><FiUsers className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Customers</p>
                            <h3 className="text-2xl font-bold text-gray-800">{customers.length}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-green-50 text-green-500 rounded-lg"><FiUserCheck className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Active Members</p>
                            <h3 className="text-2xl font-bold text-gray-800">892</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-teal-50 text-teal-500 rounded-lg"><FiUserPlus className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">New This Week</p>
                            <h3 className="text-2xl font-bold text-gray-800">48</h3>
                        </div>
                    </div>
                </div>

                {/* Area Tabel (Sudah diisi data) */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                                    <th className="py-4 px-6 font-semibold">Customer ID</th>
                                    <th className="py-4 px-6 font-semibold">Customer Name</th>
                                    <th className="py-4 px-6 font-semibold">Email</th>
                                    <th className="py-4 px-6 font-semibold">Phone</th>
                                    <th className="py-4 px-6 font-semibold text-center">Loyalty</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-700">
                                {customers.map((cust, index) => (
                                    <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-medium text-teal-600">{cust.id}</td>
                                        <td className="py-4 px-6 font-medium text-gray-800">{cust.name}</td>
                                        <td className="py-4 px-6 text-gray-500">{cust.email}</td>
                                        <td className="py-4 px-6 text-gray-500">{cust.phone}</td>
                                        <td className="py-4 px-6 text-center">
                                            {/* Badge Loyalty Color */}
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                cust.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                                                cust.loyalty === 'Silver' ? 'bg-gray-100 text-gray-600' :
                                                'bg-orange-100 text-orange-700'
                                            }`}>
                                                {cust.loyalty}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}