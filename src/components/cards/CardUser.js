'use client'

import {useState} from 'react'
import './CardUser.css'

const handleDelete = async (idUser) => {

  const objUser = {
    id: idUser
  }

  const response = await fetch(
    'http://localhost:3300/user',
    {
      cache: 'no-store', 
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objUser)
    }
    )
  console.log(await response.json())
}

const CardUser = ({user}) => {

  const [showCard, setShowCard] = useState(true)
  return (
    <>
    { showCard ?
    (
    <div className="card-user">
      <img src={user.photo} alt={user.name} />
      <div>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <p>
          <span className="delete" onClick={() => handleDelete(user.id)}>Excluir</span>
          <span>Editar</span>
        </p>
    </div>
    <button onClick={() => setContador(contador + 1)}>Somar 1</button>
    <p>valor: {showCard}</p>
  </div>
  ) : null
}
</>
  )
}

export default CardUser