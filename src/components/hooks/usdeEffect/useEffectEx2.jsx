import { useEffect, useState } from "react"

export const UseEffectExample2=()=>{
    const [position,setPosition]=useState({xPosition:0,yPosition:0})
    useEffect(()=>{
        window.addEventListener("mousemove",(event)=>{
            console.log(event);
            const {clientX,clientY}=event;
            setPosition({...position,xPosition:clientX,yPosition:clientY})
        })
    },[])
    return(
        <>
        <h3>UseEffectExample2</h3>
        <h4>x-position-{position.xPosition}</h4>
        <h4>y-position-{position.yPosition}</h4>
        </>
    )
}