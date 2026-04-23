import { MdSpaceDashboard } from "react-icons/md";
import { FiShoppingCart, FiUsers, FiPieChart, FiFileText, FiCalendar } from "react-icons/fi";

export default function Sidebar() {
    return (
        <aside className="w-[260px] bg-white min-h-screen flex flex-col border-r border-gray-100 z-10 font-sans">
            
            {/* Logo */}
            <div className="px-8 py-6">
                <h1 className="text-3xl font-extrabold text-gray-800 flex items-center">
                    Sedap <span className="text-teal-500 text-4xl leading-none">.</span>
                </h1>
                <p className="text-xs font-medium text-gray-400 mt-1">Modern Admin Dashboard</p>
            </div>

            {/* Menus */}
            <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
                {/* Active Menu */}
                <a href="#" className="flex items-center gap-4 px-4 py-3 bg-teal-50 rounded-xl text-teal-600 font-bold transition-all">
                    <MdSpaceDashboard className="text-xl" />
                    <span className="text-sm">Dashboard</span>
                </a>

                {/* Inactive Menus */}
                <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-800 font-medium transition-all group">
                    <FiShoppingCart className="text-xl group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Order List</span>
                </a>

                <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-800 font-medium transition-all group">
                    <FiFileText className="text-xl group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Order Detail</span>
                </a>

                <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-800 font-medium transition-all group">
                    <FiUsers className="text-xl group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Customer</span>
                </a>

                <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-800 font-medium transition-all group">
                    <FiPieChart className="text-xl group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Analytics</span>
                </a>
                
                <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-800 font-medium transition-all group">
                    <FiCalendar className="text-xl group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Calendar</span>
                </a>
            </nav>
        </aside>
    );
}