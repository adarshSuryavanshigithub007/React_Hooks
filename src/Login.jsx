import React, { useContext, useState } from 'react'
import { useAppContext } from './Context/AppContextProvider'


const Login = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const {setUser}= useAppContext()

    const handleSubmit = (e) => {
        e.preventDefault();
        // Log the values of name and email
        console.log('Name:', name);
        console.log('Email:', email);
        setUser({name, email})
      };
  return (
    <div>
        <h1> Login Page </h1>
        <form onSubmit={handleSubmit}>
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)} // Changed handleChange to onChange
  />
  <input
    type="text"
    value={email}
    onChange={(e) => setEmail(e.target.value)} // Changed handleChange to onChange
  />
  <button type='submit'>Submit</button>
</form>

    </div>
  )
}

export default Login