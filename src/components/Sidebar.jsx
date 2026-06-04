import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
// Tambahkan FiLayers di sini untuk icon Components
import { FiShoppingCart, FiUsers, FiPieChart, FiFileText, FiCalendar, FiBox, FiLayers, FiStar } from "react-icons/fi";

export default function Sidebar() {
    const menuItems = [
        { id: "menu-1", name: "Dashboard", path: "/", icon: <MdSpaceDashboard /> },
        { id: "menu-product", name: "Product", path: "/products", icon: <FiBox /> },
        // --- MENU BARU DISINI ---
        { id: "menu-components", name: "Components", path: "/components", icon: <FiLayers /> },
        { id: "menu-fitur-xyz", name: "Fitur Xyz", path: "/fitur-xyz", icon: <FiStar /> },
        // -------------------------
        { id: "menu-2", name: "Order List", path: "/orders", icon: <FiShoppingCart /> },
        { id: "menu-3", name: "Order Detail", path: "/order-detail", icon: <FiFileText /> },
        { id: "menu-4", name: "Customer", path: "/customers", icon: <FiUsers /> },
        { id: "menu-5", name: "Analytics", path: "/analytics", icon: <FiPieChart /> },
        { id: "menu-6", name: "Calendar", path: "/calendar", icon: <FiCalendar /> },
    ];

    const menuClass = ({ isActive }) =>
        `flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer group
        ${
            isActive
                ? "text-hijau bg-green-200 font-extrabold"
                : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

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
            <nav className="flex-1 px-4 mt-4 overflow-y-auto">
                <ul className="list-none p-0 m-0 space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={item.path}
                                end={item.path === "/"}
                                className={menuClass}
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`text-xl transition-transform ${
                                                !isActive && "group-hover:scale-110"
                                            }`}
                                        >
                                            {item.icon}
                                        </span>
                                        <span className="text-sm">{item.name}</span>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}