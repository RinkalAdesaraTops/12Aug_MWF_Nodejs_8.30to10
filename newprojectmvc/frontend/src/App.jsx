import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [cat,setCat] = useState([])
  useEffect(()=>{
      async function getCategory(){
       await axios.get("http://localhost:4000/admin/category")
        .then((res)=>setCat(res.data.allcat))
      }
      getCategory()
  },[])
  return (
    <>
      <div>
        <h3>Category List</h3>
        <table border={'2'}>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
          {
              cat.map((i)=>{
                return (<tr>
                  <td>{i._id}</td>
                  <td>{i.name}</td>
                </tr>
                )
              })
          }
        </table>
      </div>
    </>
  )
}

export default App
