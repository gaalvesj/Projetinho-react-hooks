import React from 'react'
import Fristcontext from './Fristcontext'
import { useState } from 'react'

const FristProvider = ({ children }) => {
    const [person, setPerson] = useState({
        name: '',
        email:'',
    })

    function creatPerson(newPerson) {
        if(!person.name && !person.email) return setPerson(newPerson);

        setPerson({...person, newPerson});
    }

    const context = {
        person,
        creatPerson,
    }
  return (
    <Fristcontext.Provider value={ context }>
        {children}
    </Fristcontext.Provider>
  )
}

export default FristProvider