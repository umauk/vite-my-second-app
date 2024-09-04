import { useRef, useState } from "react"

export const UserRfExample=()=>{
    const reference =useRef(0);
    const [count,setcount]=useState(0)
    const clickHandler=()=>{
        reference.current+=1
        setcount(count+1);
        console.log(reference.current)
    }
    return(
        <>
        <h3>useref-{reference.current}</h3>
        <h3>use state-{count}</h3>
        <button onClick={clickHandler}>click</button>
        </>
    )
}