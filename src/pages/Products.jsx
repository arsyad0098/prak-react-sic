import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Produk() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=30")
            .then((res) => {
                setProducts(res.data.products);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    if (loading) return <div className="p-8">Loading daftar produk...</div>;

    return (
        <div className="p-8 font-sans">
            <h1 className="text-2xl font-bold mb-2">Products</h1>
            <p className="text-gray-400 mb-6">Dashboard / Product List</p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#00B074] text-white">
                        <tr>
                            <th className="p-4 w-16">#</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                                <td className="p-4 text-gray-500">{index + 1}</td>
                                <td className="p-4">
                                    {/* Sesuai Gambar 2: Nama produk jadi Link */}
                                    <Link 
                                        to={`/products/${item.id}`} 
                                        className="text-[#00B074] hover:underline font-medium"
                                    >
                                        {item.title}
                                    </Link>
                                </td>
                                <td className="p-4 text-gray-600">{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}