import {
  FiFileText,
  FiTruck,
  FiXCircle,
  FiShoppingBag,
  FiCalendar,
} from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Table from "../components/Table"; 
import ProductCard from "../components/ProductCard"; 

export default function Components() {
  // Data untuk Table
  const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000",
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
    },
  ];

  return (
    <Container>
      <PageHeader tittle="Components" />

      <div className="space-y-6">
        {/* Section Buttons */}
        <section>
          <h3 className="mb-2 font-semibold">Buttons</h3>
          <div className="flex flex-wrap gap-2">
            <Button>Simpan</Button>
            <Button type="secondary">Simpan</Button>
            <Button type="success">Simpan</Button>
            <Button type="danger">Simpan</Button>
            <Button type="warning">Simpan</Button>
          </div>
        </section>

        {/* Section Badges */}
        <section>
          <h3 className="mb-2 font-semibold">Badges</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Primary</Badge>
            <Badge type="secondary">Secondary</Badge>
            <Badge type="success">Success</Badge>
            <Badge type="danger">Danger</Badge>
            <Badge type="warning">Warning</Badge>
          </div>
        </section>

        {/* Section Avatars */}
        <section>
          <h3 className="mb-2 font-semibold">Avatars</h3>
          <div className="flex gap-2">
            <Avatar name="Budi">B</Avatar>
            <Avatar name="Siti">S</Avatar>
          </div>
        </section>

        {/* Section Table */}
        <section>
          <h3 className="mb-2 font-semibold">Product Table</h3>
          <Table headers={headers}>
            {products.map((product, index) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border px-4 py-3">{index + 1}</td>
                <td className="border px-4 py-3">{product.name}</td>
                <td className="border px-4 py-3">{product.category}</td>
                <td className="border px-4 py-3">{product.price}</td>
                <td className="border px-4 py-3">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </Table>
        </section>

        {/* Section Card */}
        <Card>
          <h2 className="text-xl font-bold">Judul Card</h2>
          <p className="text-gray-600">Ini adalah isi dari card.</p>
        </Card>
        <ProductCard
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          title="Sepatu Sport"
          category="Fashion"
          price="Rp 450.000"
          description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          title="Smartphone"
          category="Elektronik"
          price="Rp 4.500.000"
          description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
        />
      </div>

      <Footer />
    </Container>
  );
}
