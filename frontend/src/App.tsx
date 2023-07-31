import { gql, useQuery } from "@apollo/client"
import NewUserForm from './components/NewUserForm';
type User={
  id: string
  name: string
}

const GET_USER = gql`
  query{
    users{
      id
      name
    }
  }
`;

function App(){
  const {data,loading} = useQuery<{users: User[]}>(GET_USER)
  console.log(data)
  if (loading){
    return <p>Carregando</p>
  }
  return(
    <>
      <NewUserForm/>
      <div>
        {data?.users.map((u:User)=><h2>{u.name}</h2>)}
      </div>
    </>
  )
}

export default App