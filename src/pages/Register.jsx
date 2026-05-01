import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [form, setForm] = useState({
    " name": "",
    " email": "",
    " password": "",
  })
  const [msg, setMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
        {msg && <p className='text-blue-600 mb-4'>{msg}</p>}
        <h1 className='text-3xl font-bold text-center text-blue-600 mb-4'>Register</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
          <input className='border border-gray-500 rounded p-2' type="text" name="name" placeholder="Name" />
          <input className='border border-gray-500 rounded p-2' type="email" name="email" placeholder="Email" />
          <input className='border border-gray-500 rounded p-2' type="password" name="password" placeholder="Password" />
          <button className='bg-blue-600 text-white p-2 rounded text-xl hover:bg-blue-800 hover:cursor-pointer' type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register