import React, { useState } from "react";
import api from "../api/axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      setMsg(res.data.msg || "Registration successful");
      // Reset the form
      setForm({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setMsg(err.response?.data?.msg || "Something went wrong");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Register
        </h1>
        {msg && <p className="text-blue-600 mb-4">{msg}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border border-gray-500 rounded p-2"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />
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
  );
};

export default Register;
