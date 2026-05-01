import React, { useState } from 'react'

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
    <div>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} >
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register