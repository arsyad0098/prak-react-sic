import { useState } from "react";
import { FiSearch, FiBell, FiMessageSquare, FiGift, FiSettings } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="flex justify-between items-center px-8 py-4 bg-white sticky top-0 z-20 font-sans">
            
            {/* Search Bar */}
            <div 
                className="relative w-full max-w-md cursor-pointer group" 
                onClick={() => setIsSearchOpen(true)}
            >
                <div className="flex items-center bg-gray-50 border border-transparent group-hover:border-teal-200 rounded-xl px-4 py-2.5 transition-all">
                    <FiSearch className="text-gray-400 text-lg" />
                    <input
                        type="text"
                        readOnly
                        placeholder="Search here"
                        className="bg-transparent border-none outline-none ml-3 text-sm w-full text-gray-700 cursor-pointer placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Quick Search Modal */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center z-50 pt-20">
                    <div className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-teal-600">Quick Search</h2>
                            <FaTimes 
                                className="cursor-pointer text-gray-400 hover:text-red-500 text-lg transition-colors" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsSearchOpen(false);
                                }} 
                            />
                        </div>
                        <input 
                            autoFocus 
                            type="text" 
                            placeholder="Type to search orders, food, or customers..." 
                            className="w-full border-b-2 border-teal-500 text-xl py-3 outline-none text-gray-700" 
                        />
                        <div className="mt-5 flex gap-2">
                            <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 cursor-pointer hover:bg-teal-50 hover:text-teal-600">#Orders</span>
                            <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 cursor-pointer hover:bg-teal-50 hover:text-teal-600">#Revenue</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Icons & Profile */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                    <button className="relative p-2.5 bg-blue-50 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                        <FiBell className="text-lg" />
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-blue-500 border-2 border-white rounded-full"></span>
                    </button>
                    <button className="relative p-2.5 bg-teal-50 text-teal-500 hover:bg-teal-100 rounded-full transition-colors">
                        <FiMessageSquare className="text-lg" />
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-teal-500 border-2 border-white rounded-full"></span>
                    </button>
                    <button className="p-2.5 bg-purple-50 text-purple-500 hover:bg-purple-100 rounded-full transition-colors">
                        <FiGift className="text-lg" />
                    </button>
                    <button className="relative p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-full transition-colors">
                        <FiSettings className="text-lg" />
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                    </button>
                </div>

                <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                    <span className="text-sm text-gray-600">Hello, <b className="text-gray-800">Arsyad</b></span>
                    <img src="https://avatar.iran.liara.run/public/28" alt="Profile" className="w-10 h-10 rounded-full border border-gray-200" />
                </div>
            </div>
        </header>
    );
}