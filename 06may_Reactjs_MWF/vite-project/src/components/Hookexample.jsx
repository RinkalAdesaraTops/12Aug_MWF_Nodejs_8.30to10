import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Hookexample = () => {
    const [data,setData] = useState({
        id:"",
        name:"",
        age:"",
        salary:""
    })
    const [users,setUsers] = useState([])

    const disp = ()=>{
        axios.get("http://localhost:4000/users")  
            .then((res)=>setUsers(res.data)) 
    }
    useEffect(()=>{
        disp()
    },[])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        let id = data.id
        if(id != ''){
            //update method - put
            axios.put("http://localhost:4000/users/"+id,data) 
        } else {
                //post - insert
            axios.post("http://localhost:4000/users",data)        
        }
        setData({
            id:"",
            name:"",
            age:"",
            salary:""
        })
        disp()
    }

    const delProduct = (id)=>{
        axios.delete("http://localhost:4000/users/"+id) 
            .then((res)=>console.log("deleted successfully")
            )
            disp()
    }
    const editProduct = (id)=>{
        axios.patch("http://localhost:4000/users/"+id) 
            .then((res)=>setData({
                id:id,
                name:res.data.name,
                age:res.data.age,
                salary:res.data.salary,
            })
            )
            disp()
    }
  return (
    <div>
      <form action="#" onSubmit={saveData}>
        Name: <input type="text" name="name" id="" value={data.name} onChange={handleChange}/><br /><br />
        Age: <input type="text" name="age" id="" value={data.age} onChange={handleChange}/><br /><br />
        Salary: <input type="text" name="salary" id="" value={data.salary} onChange={handleChange}/><br /><br />
        <input type="submit" value="Save Data"/>
      </form>

      <br />
      <table border={'2'}>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
        </tr>
        {
            users.map((i)=>{
                return (
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.salary}</td>
                        <td>
                        <button onClick={()=>editProduct(i.id)}>Edit</button>
                        <button onClick={()=>delProduct(i.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Hookexample
