//case-2----dependency array
/*import { useEffect, useState } from "react"
import axios from "axios"

export const UseEffectExample=()=>{
const [data,setData]=useState([])
const [type,setType]=useState("carts")

    useEffect(()=>{
        console.log("useEffect rendering")
        fetchData();

    },[type,age])
    const fetchData=async()=>{
        try{
            
        const {data,status}= await axios.get(`https://fakestoreapi.com/${type}`)
        if(status==200){
             console.log(data);
             setData(data)
             
            }
        }
        catch(err){
            console.log(err);
        }
        
       
    }
    const changeTypeHandler=(each)=>{
        setType(each)
    }
         const ageHandler=()=>{
        setAge(age+1);
        console.log(age);
    }
    

    return(
        <>
        <h3>UseEffectExample</h3>
        <button onClick={ageHandler}>increament age</button>
        {
        ["products","carts","users"].map(each=><button onClick={()=>changeTypeHandler(each)}>{each}</button>)
        }
        <h5>{type}</h5>
        
      {
        data.map(each=>{
            return (<div key={each.id}>
                <pre >{JSON.stringify(each)}</pre>
                
                </div>)
            
        })
      }
        </>
    )
}

//case-3---no dependency array
import { useEffect, useState } from "react"
import axios from "axios"

export const UseEffectExample=()=>{
const [data,setData]=useState([])
const [type,setType]=useState("carts")
const [age,setAge]=useState(0)

    useEffect(()=>{
        console.log("useEffect rendering")
        fetchData();

    },[type,age])
    const fetchData=async()=>{
        try{
            
        const {data,status}= await axios.get(`https://fakestoreapi.com/${type}`)
        if(status==200){
             console.log(data);
             setData(data)
             
            }
        }
        catch(err){
            console.log(err);
        }
        
       
    }
    const changeTypeHandler=(each)=>{
        setType(each)
    }
    const ageHandler=()=>{
        setAge(age+1);
        console.log(age);
    }
    

    return(
        <>
        <h3>UseEffectExample</h3>
        <button onClick={ageHandler}>increament age</button>
        
        {
        ["products","carts","users"].map(each=><button onClick={()=>changeTypeHandler(each)}>{each}</button>)
        }
        <h5>{type}</h5>
        
      {
        data.map(each=>{
            return (<div key={each.id}>
                <pre >{JSON.stringify(each)}</pre>
                
                </div>)
            
        })
      }
        </>
    )
}*/
import { useEffect, useState } from "react"
import axios from "axios"

export const UseEffectExample=()=>{
const [data,setData]=useState([])
const [type,setType]=useState("carts")
const [age,setAge]=useState(0)

    useEffect(()=>{
        console.log("useEffect rendering")
        fetchData();

    },[type,age])
    const fetchData=async()=>{
        try{
            
        const {data,status}= await axios.get(`https://fakestoreapi.com/${type}`)
        if(status==200){
             console.log(data);
             setData(data)
             
            }
        }
        catch(err){
            console.log(err);
        }
        
       
    }
    const changeTypeHandler=(each)=>{
        setType(each)
    }
    const ageHandler=()=>{
        setAge(age+1);
        console.log(age);
    }
    

    return(
        <>
        <h3>UseEffectExample</h3>
        <button onClick={ageHandler}>increament age</button>
        
        {
        ["products","carts","users"].map(each=><button onClick={()=>changeTypeHandler(each)}>{each}</button>)
        }
        <h5>{type}</h5>
        
      {
        data.map(each=>{
            return (<div key={each.id}>
                <pre >{JSON.stringify(each)}</pre>
                
                </div>)
            
        })
      }
        </>
    )
}