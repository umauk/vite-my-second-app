import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

export const ProductScreen=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        const response= await axios.get("https://fakestoreapi.com/products")
        if(response.status==200){
            setData(response.data)
            console.log(response.data)
        }
    }
    return(
        <>
        <h4>products screen</h4>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>TITLE</th>
          <th>IMAGE</th>
          <th>PRICE</th>
          <th>INFO</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map(each=>
                <tr>
                <td>{each.id}</td>
                <td>{each.title}</td>
                <td><img src={each.image} width={100} height={100}/></td>
                <td>${each.price}</td>
                <td><button><Link to={`${each.id}`}>view product</Link></button></td>
              </tr>  
            )
         
        }
        

      </tbody>
    </Table>
        </>
    )
    }