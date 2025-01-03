import { useEffect, useState } from "react"
import { getPosts, getUser } from "./API"
import Postcard from "./Postcard"
import Usercard from "./Usercard"
import "./App.css"


function App() {

  const[data, setdata] = useState(null)
  const[userdata, setuserdata] = useState(null)

  
useEffect(() => {
  getPosts().then((posts) => setdata(posts))
}, [])

useEffect(() => {
  getUser().then((user) => setuserdata(user.results[0]))
}, [])

const refresh = () => {
  getUser().then((user) => setuserdata(user.results[0]))
}

console.log(userdata)

  return (
    <div className="card-conteiner">
      {userdata && <><Usercard  data={userdata}/>
      <button onClick={refresh}>Referesh User</button>
      </>}
      {/* { data ? data.map((e) => <Postcard 
        title={e.title}
        body={e.body}/>) : "No Data Available"} */}
    </div>
  )
}

export default App
