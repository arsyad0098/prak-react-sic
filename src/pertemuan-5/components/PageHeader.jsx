import { FiPlus, FiSearch, FiBell } from "react-icons/fi";

export default function PageHeader() {
    return (
        // Pakai backdrop-blur biar header kelihatan tembus pandang estetik saat di-scroll
        <header className="flex flex-col md:flex-row md:items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10 font-sans">
            
            {/* Left: Title & Breadcrumb */}
            <div>
                <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">Order Management</h2>
                <div className="flex items-center gap-2 text-sm font-medium mt-1.5">
                    <span className="text-gray-400 hover:text-teal-600 cursor-pointer transition-colors">Dashboard</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-lg border border-teal-100">
                        Order List
                    </span>
                </div>
            </div>

            {/* Right: Actions (Search, Notifications, Add Button) */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                
                {/* Search Bar */}
                <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 hover:border-teal-300 transition-colors focus-within:border-teal-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-50">
                    <FiSearch className="text-gray-400 text-lg" />
                    <input 
                        type="text" 
                        placeholder="Search orders..." 
                        className="bg-transparent border-none outline-none ml-2 text-sm w-48 text-gray-700 placeholder-gray-400"
                    />
                </div>

                {/* Notification Bell */}
                <button className="relative p-2.5 text-gray-400 hover:text-teal-600 bg-gray-50 hover:bg-teal-50 rounded-full transition-all border border-gray-100 hover:border-teal-200">
                    <FiBell className="text-xl" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
                </button>

                {/* Premium Add Button */}
                <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_4px_12px_rgba(13,148,136,0.3)] hover:shadow-[0_6px_16px_rgba(13,148,136,0.4)] hover:-translate-y-0.5 transition-all">
                    <FiPlus className="text-lg" />
                    Add New
                </button>

            </div>
        </header>
    );
}