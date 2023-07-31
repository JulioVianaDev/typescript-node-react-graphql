import { gql, useMutation } from '@apollo/client'
import React, { FormEvent, useState } from 'react'

const CREATE_USER = gql`
mutation($name: String!){
  craeteUser(name: $name) {
    id
    name
  }
}
`;

function NewUserForm() {
  const [name,setUser] = useState("")
  const [craeteUser,{data,loading,error}] = useMutation(CREATE_USER)
  const addUser= async(event: FormEvent)=>{
    event.preventDefault()
    if(!name){
      return
    }
    await craeteUser({
      variables:{
        name,
      }
    })
    console.log(data)
  }
  
  return (
    <form onSubmit={addUser}>
      <input type="text" onChange={e=>setUser(e.target.value) } />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default NewUserForm