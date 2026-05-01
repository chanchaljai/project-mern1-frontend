import React from 'react'
import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })
  const [msg, setMsg] = useState("");

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
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Something went wrong");
    }
  }
  return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Login
        </h1>
        {msg && <p className="text-blue-600 mb-4">{msg}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border border-gray-500 rounded p-2"
            type="email"
            value={form.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
          <input
            className="border border-gray-500 rounded p-2"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button
            className="bg-blue-600 text-white p-2 rounded text-xl hover:bg-blue-800 hover:cursor-pointer"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>

  )
}

export default Login