import React, { useState } from 'react'
import { useContext } from 'react'
import Fristcontext from './context/Fristcontext'

const Login = () => {
    const {creatPerson} = useContext(Fristcontext);
    const {user, setUser} = useState({
        name: '',
        email: '',
    })
  return (
    <div>
       <form>
        <label htmlFor='user'> <input 
        type="text" 
        name="name" 
        id="user" 
        placeholder="Seu Nome"
        value={user.name}
        onChange={() => handleChange()}
        />
        </label>
       </form>
    </div>
  )
}

export default Login