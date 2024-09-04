import { useState } from "react"

export const Counter=()=>{
    const [age,setage]=useState(10)


    /*const increamentAgeHandler=()=>{
        setage(age=>age+1);
    }
    const decreamentAgeHandler=()=>{
        setage(age=>age-1);
    }
    const resetAgeHandler=()=>{
        setage(0);
    }*/

             //using switch case
        const ageHandler=(type)=>{
           /* switch(type){
                case "INCREAMENT": 
                setage(age+1)
                break;
                case "DECREAMENT": 
                if (age>0){
                    setage(age-1);
                }
                else{
                    alert("Age can not be negative");
                }
                break;
                case "RESET":
                    setage(0)
            }*/


                    //Batch updates
                    switch(type){
                        case "INCREAMENT": 
                        setage(age=>age+1)
                        setage(age=>age+1)
                        setage(age=>age+1)
                        break;
                        case "DECREAMENT": 
                        if (age>0){
                            setage(age-1);
                        }
                        else{
                            alert("Age can not be negative");
                        }
                        break;
                        case "RESET":
                            setage(0)
                    }      
        }


    return(
        <>
        <h3>counter example {age}</h3>
        <button onClick={()=>ageHandler("INCREAMENT")}>INCREAMENT</button>
        <button onClick={()=>ageHandler("DECREAMENT")}>DECREAMENT</button>
        <button onClick={()=>ageHandler("RESET")}>RESET</button>
        </>
    )
}