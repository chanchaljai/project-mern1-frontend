import React, { useEffect } from "react";
import { useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";


const ProductList = () => {
  const [products, setProducts] = useState([]);
const loadProducts = async () => {
  try {
    const res = await api.get("/products");
    setProducts(res.data);
  } catch (err) {
    console.error(err);
  }
}

useEffect(() => {
  loadProducts();
}, []);


  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ProductList</h1>
        <Link to="/admin/add-product">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Product
          </button>
        </Link>
      </div>
      <div>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-200">ID</th>
              <th className="px-4 py-2 border border-gray-200">Title</th>
              <th className="px-4 py-2 border border-gray-200">Price</th>
              <th className="px-4 py-2 border border-gray-200">Stock</th>
              <th className="px-4 py-2 border border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
