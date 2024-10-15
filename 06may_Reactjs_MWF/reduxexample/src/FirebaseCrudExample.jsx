import { addDoc, collection,query,onSnapshot, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from './firebase'

const FirebaseCrudExample = () => {

    const [id,setId] = useState("")
    const [data,setData]=useState({
        name:"",
        age:"",
        salary:""
    })
    const [userdata,setUserData] = useState([]);

    useEffect(() => {
      const q = query(collection(db, "user"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let todosArray = [];
        querySnapshot.forEach((doc) => {
          todosArray.push({ ...doc.data(), id: doc.id });
        });
        setUserData(todosArray)
      });
      return () => unsub();
    }, []);

    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = async(e)=>{
        e.preventDefault()
        setUserData([
            ...userdata,
            data
        ])
        if(id != ''){
          //update doc
          await updateDoc(doc(db,"user",id),data)

        } else {
          //insert doc
        await addDoc(collection(db,"user"),data)

        }
        setData({
          name:"",
            age:"",
            salary:""
        })
        setId("")
    }
    const delData = async(id)=>{
        let data = await deleteDoc(doc(db,"user",id))

    }
    const editData = async(id)=>{
      setId(id)
      let alldata = await getDoc(doc(db,"user",id))
      setData(alldata.data());
    
      
    }
  return (
    <div>
      <h3>Firebase CRUD Example</h3>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/> <br /><br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age" value={data.age} onChange={handleChange} /> <br /><br />
        <label htmlFor="">Salary:</label>
        <input type="number" name="salary" id="salary" value={data.salary} onChange={handleChange}/> <br /><br />
        <input type="submit" value="Save" />
      </form>
      <br />
      <table border={"2"}>
        <tr>
          <td>ID</td>
          <td>NAME</td>
          <td>AGE</td>
          <td>Salary</td>
          <td>Action</td>
        </tr>
        {
          userdata.map((i)=>{
return(
  <tr>
          <td>{i.id}</td>
          <td>{i.name}</td>
          <td>{i.age}</td>
          <td>{i.salary}</td>
          <td><button onClick={()=>editData(i.id)}>Edit</button>
              <button onClick={()=>delData(i.id)}>Delete</button>
          </td>
        </tr>
)
          })
        }
      </table>
    </div>
  )
}

export default FirebaseCrudExample
