// src/data/products.js
export const products = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  code: `PRD-00${i + 1}`,
  category: i % 2 === 0 ? "Electronics" : "Accessories",
  brand: "Sedap Brand",
  price: Math.floor(Math.random() * 1000) + 100,
  stock: Math.floor(Math.random() * 50) + 5,
}));
