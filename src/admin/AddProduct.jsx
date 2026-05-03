import React from 'react'
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
    })
  return (
    <div>AddProduct</div>
  )
}

export default AddProduct