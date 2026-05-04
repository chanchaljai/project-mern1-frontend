import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ProductList</h1>
        <Link to="/admin/add-product">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add New Product</button>
        </Link>

        <div>
          <table>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
