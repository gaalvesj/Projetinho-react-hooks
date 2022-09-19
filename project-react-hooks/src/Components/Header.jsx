import React from 'react'
import Fristcontext from './context/Fristcontext';

 function Header() {
    const { person } = useContext(Fristcontext)

    if(person.name === '') return <h3>Bem Vindo</h3>
  return (
    <div>
        <h1>Bem-vindo, {person.name}</h1>
    </div>
  )
}
export default Header;