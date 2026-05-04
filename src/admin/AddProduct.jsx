import React from "react";
import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
    stock: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/products/create", form);
      alert("Product added successfully");
      navigate("/admin/product-list");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen bg-gray-200 ">
      <div className="max-w-lg mx-auto   bg-white p-6 shadow rounded">
        <h2 className="text-2xl text-center font-bold mb-6">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              type="text"
              placeholder={key}
              value={form[key]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
