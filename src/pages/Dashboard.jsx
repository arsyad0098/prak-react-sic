import Header from "../layouts/Header";
import { FiFileText, FiTruck, FiXCircle, FiShoppingBag, FiCalendar } from "react-icons/fi";
import { 
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend 
} from 'recharts';

const areaData = [
    { name: 'Sunday', orders: 200 },
    { name: 'Monday', orders: 300 },
    { name: 'Tuesday', orders: 400 },
    { name: 'Wednesday', orders: 280 },
    { name: 'Thursday', orders: 456 },
    { name: 'Friday', orders: 320 },
    { name: 'Saturday', orders: 400 },
];

const pieData = [
    { name: 'Total Order', value: 81 },
    { name: 'Customer Growth', value: 22 },
    { name: 'Total Revenue', value: 62 },
];
const COLORS = ['#FF5B5B', '#00B074', '#2D9CDB'];

export default function Dashboard() {
    return (
        <div className="flex-1 bg-[#F9FAFB] min-h-screen flex flex-col font-sans">
            <Header />

            <div className="p-8">
                {/* Dashboard Title & Filter */}
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
                        <p className="text-sm text-gray-500 mt-1">Hi, Arsyad. Welcome back to Sedap Admin!</p>
                    </div>
                    <button className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm font-semibold text-gray-700">
                        <div className="bg-blue-50 p-1.5 rounded-lg text-blue-500">
                            <FiCalendar />
                        </div>
                        <div className="text-left flex flex-col">
                            <span className="text-[10px] text-gray-400 font-medium">Filter Periode</span>
                            <span>17 April 2020 - 21 May 2020</span>
                        </div>
                    </button>
                </div>

                {/* 1. STATS CARDS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Total Orders */}
                    <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <div className="bg-teal-50 rounded-full p-4 text-teal-500">
                            <FiFileText className="text-3xl" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-extrabold text-gray-800">75</span>
                            <span className="text-sm text-gray-500 font-medium mt-0.5">Total Orders</span>
                            <span className="text-[11px] text-teal-500 mt-1 font-semibold flex items-center gap-1">↑ 4% (30 days)</span>
                        </div>
                    </div>

                    {/* Total Delivered */}
                    <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <div className="bg-blue-50 rounded-full p-4 text-blue-500">
                            <FiTruck className="text-3xl" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-extrabold text-gray-800">357</span>
                            <span className="text-sm text-gray-500 font-medium mt-0.5">Total Delivered</span>
                            <span className="text-[11px] text-teal-500 mt-1 font-semibold flex items-center gap-1">↑ 4% (30 days)</span>
                        </div>
                    </div>

                    {/* Total Canceled */}
                    <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <div className="bg-red-50 rounded-full p-4 text-red-500">
                            <FiXCircle className="text-3xl" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-extrabold text-gray-800">65</span>
                            <span className="text-sm text-gray-500 font-medium mt-0.5">Total Canceled</span>
                            <span className="text-[11px] text-red-500 mt-1 font-semibold flex items-center gap-1">↓ 25% (30 days)</span>
                        </div>
                    </div>

                    {/* Total Revenue */}
                    <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <div className="bg-green-50 rounded-full p-4 text-green-500">
                            <FiShoppingBag className="text-3xl" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-extrabold text-gray-800">$128</span>
                            <span className="text-sm text-gray-500 font-medium mt-0.5">Total Revenue</span>
                            <span className="text-[11px] text-red-500 mt-1 font-semibold flex items-center gap-1">↓ 12% (30 days)</span>
                        </div>
                    </div>
                </div>

                {/* 2. CHARTS SECTION */}
                <div className="grid lg:grid-cols-12 gap-6">
                    
                    {/* PIE CHART */}
                    <div className="lg:col-span-5 bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-800">Pie Chart</h3>
                            <div className="flex gap-4 text-sm font-medium">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="accent-gray-400" /> Chart
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" defaultChecked className="accent-red-500" /> Show Value
                                </label>
                            </div>
                        </div>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie 
                                        data={pieData} 
                                        innerRadius={60} 
                                        outerRadius={85} 
                                        paddingAngle={5} 
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* AREA CHART */}
                    <div className="lg:col-span-7 bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Chart Order</h3>
                                <p className="text-xs text-gray-400 mt-1">Lorem ipsum dolor sit amet, consectetur adip</p>
                            </div>
                            <button className="flex items-center gap-2 text-teal-500 border border-teal-500 px-4 py-2 rounded-xl text-sm font-bold hover:bg-teal-50 transition-colors">
                                ↓ Save Report
                            </button>
                        </div>
                        <div className="h-[250px] mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={areaData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorOrder" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#2D9CDB" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#2D9CDB" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#9ca3af'}} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#9ca3af'}} />
                                    <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                    <Area type="monotone" dataKey="orders" stroke="#2D9CDB" fillOpacity={1} fill="url(#colorOrder)" strokeWidth={3} activeDot={{ r: 6, strokeWidth: 0, fill: '#2D9CDB' }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}