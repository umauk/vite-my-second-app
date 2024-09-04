import axios from "axios";
import { useEffect, useState } from "react"


export const ElectronicsScreen=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const response= await axios.get("https://fakestoreapi.com/products/category/electronics")
        if(response.status==200){
            setData(response.data)
            console.log(response.data)
        }

    }
    return(
        <>
        <h4>electronics screen</h4>
        {
            data.map(each=><>
            <pre>{JSON.stringify(each)}</pre>
            </>)
        }
        </>
    )
}