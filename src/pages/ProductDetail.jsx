import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail() {
    const { id } = useParams(); // Ambil ID dari URL sesuai Gambar 1
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [id]);

    if (error) return <div className="text-red-600 p-8">Error: {error}</div>;
    if (!product) return <div className="p-8 text-center text-hijau font-bold text-xl">Sedang mengambil data...</div>;

    return (
        <div className="p-8 flex justify-center items-start min-h-screen bg-gray-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="rounded-xl mb-6 w-full h-64 object-contain bg-gray-50 p-2"
                />
                <h2 className="text-2xl font-black text-gray-800 mb-3">{product.title}</h2>
                
                <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                        <span className="text-gray-400">Kategori:</span>
                        <span className="font-semibold text-gray-700">{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Brand:</span>
                        <span className="font-semibold text-gray-700">{product.brand}</span>
                    </div>
                </div>

                <div className="bg-green-50 p-4 rounded-xl flex justify-between items-center">
                    <span className="text-hijau font-bold">Harga</span>
                    {/* Sesuai rumus gambar 3: Harga * 1000 */}
                    <span className="text-2xl font-black text-hijau">
                        Rp {(product.price * 1000).toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
}