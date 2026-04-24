import { useState } from "react";
import PageHeader from "../components/PageHeader"; 
import { FiPlus, FiSearch, FiFilter, FiShoppingBag, FiClock, FiCheckCircle } from "react-icons/fi"; 
// Import data orders dari mockData
import { ordersData } from "../data/mockData"; 

export default function Orders() {
    // Simpan data di state
    const [orders, setOrders] = useState(ordersData);

    // Fungsi kecil untuk format angka jadi Rupiah (Rp)
    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(number);
    };

    // Hitung statistik simpel buat nampil di atas tabel
    const totalOrders = orders.length;
    const completedOrders = orders.filter(order => order.status === "Completed").length;
    const pendingOrders = orders.filter(order => order.status === "Pending").length;

    return (
        <div className="flex-1 bg-[#F9FAFB] min-h-screen flex flex-col font-sans">
            
            <PageHeader title="Order List" breadcrumb={["Dashboard", "Order List"]}>
                <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 hover:border-teal-300 transition-colors focus-within:border-teal-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-50">
                    <FiSearch className="text-gray-400 text-lg" />
                    <input type="text" placeholder="Search orders..." className="bg-transparent border-none outline-none ml-2 text-sm w-48 text-gray-700 placeholder-gray-400" />
                </div>

                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50 transition-colors">
                    <FiFilter className="text-lg" />
                    <span className="text-sm font-medium">Filter</span>
                </button>

                <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:-translate-y-0.5 transition-all">
                    <FiPlus className="text-lg" />
                    New Order
                </button>
            </PageHeader>

            <div className="p-8">
                
                {/* Statistik Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-500 rounded-lg"><FiShoppingBag className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Orders</p>
                            <h3 className="text-2xl font-bold text-gray-800">{totalOrders}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-orange-50 text-orange-500 rounded-lg"><FiClock className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Pending Orders</p>
                            <h3 className="text-2xl font-bold text-gray-800">{pendingOrders}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-green-50 text-green-500 rounded-lg"><FiCheckCircle className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Completed</p>
                            <h3 className="text-2xl font-bold text-gray-800">{completedOrders}</h3>
                        </div>
                    </div>
                </div>

                {/* Area Tabel Orders */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                                    <th className="py-4 px-6 font-semibold">Order ID</th>
                                    <th className="py-4 px-6 font-semibold">Customer Name</th>
                                    <th className="py-4 px-6 font-semibold">Date</th>
                                    <th className="py-4 px-6 font-semibold">Total Price</th>
                                    <th className="py-4 px-6 font-semibold text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-700">
                                {orders.map((order, index) => (
                                    <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-medium text-teal-600">{order.id}</td>
                                        <td className="py-4 px-6 font-medium text-gray-800">{order.customerName}</td>
                                        <td className="py-4 px-6 text-gray-500">{order.orderDate}</td>
                                        <td className="py-4 px-6 font-medium text-gray-700">{formatRupiah(order.totalPrice)}</td>
                                        <td className="py-4 px-6 text-center">
                                            {/* Pewarnaan dinamis untuk badge Status */}
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                order.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                'bg-red-100 text-red-700'
                                            }`}>
                                                {order.status}
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