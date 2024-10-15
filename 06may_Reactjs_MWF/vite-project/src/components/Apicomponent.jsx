import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useUrl from './useUrl'

// get post put patch
const Apicomponent = () => {
    // const [data,setData] = useState([])
    const [data] = useUrl("https://fakestoreapi.com/products")
    const [users] = useUrl("https://api.escuelajs.co/api/v1/products")
    console.log(users);
    
    // useEffect(()=>{
    //     axios.get("https://fakestoreapi.com/products")
    //     .then((res)=>setData(res.data))
        
    //     // fetch('https://fakestoreapi.com/products')
    //     // .then(res=>res.json())
    //     // .then(json=>setData(json))
    // })
    const delCat = (id)=>{
        axios.delete("https://fakestoreapi.com/products/"+id)
            .then((res)=>console.log(res))
    }
    const editPr = (id)=>{
        axios.patch("https://fakestoreapi.com/products/"+id)
            .then((res)=>console.log(res))
    }
    
  return (
    <div>
        <h3>Api Example</h3>
        <table border={'2'}>
        <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Category</th>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        {
            data.map((i)=>{
                return (
                    <tr>
                        <td>{i.id}</td>
                        <td><img src={i.image} height={"50px"} width={"50px"}/></td>
                        <td>{i.category}</td>
                        <td>{i.title}</td>
                        <td>{i.price}</td>
                        <td><button onClick={()=>editPr(i.id)}>Edit</button><button onClick={()=>delCat(i.id)}>Delete</button></td>
                    </tr>
                )
            })
        }
        </table>
    </div>
  )
}

export default Apicomponent
