import { useState } from "react"
import { mobileValidation } from "./mobile-validation"

export const ControlledForm=()=>{
    const [model,setModel]=useState("")
    const [modelErr,setModelErr]=useState("")
    const [mobile,setMobile]=useState("")
    const [mobileErr,setMobileErr]=useState("")

    // modelname
    
    const modelHandler=(event)=>{
      const modelName =event.target.value;
      setModel(modelName)
      const error=modelValidator(modelName)
      if(error){
        setModelErr(error)
      }
      else{
        setModelErr("")
      }
    
    }
    const modelValidator=(value)=>{



        let error=""
        const modelRegex=/^samsung/i;
        if(!value){
            error="please enter model name"
        }
        else if(!modelRegex.test(value)){
            console.log(value);
            
            error="please enter the correct model name"
         }
        return error;
    }


    //mobile number
    const mobileHandler=(event)=>{
        const mobileNumber=event.target.value;
        setMobile(mobileNumber)
        const errors=mobileValidation(mobileNumber);
        if(errors){
            setMobileErr(errors)
        }
        else{
            setMobileErr("")
        }
    }
    const onSubmit=()=>{
        if(modelErr || mobileErr){
            alert("please fill properly")
        }
        else{

        }
    }
    return(
        <>
  <form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="username">Enter the Mode Name:</label>
    <input type="text" className="form-control" id="email" value={model} onChange={modelHandler} />
    <span style={{color:"red"}}>{modelErr}</span>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="number" className="form-control" id="pwd" value={mobile} onChange={mobileHandler}  />
    <span style={{color:"red"}}>{mobileErr}</span>

    
  </div>
   
   <button type="submit" className="btn btn-default">
    Submit
  </button>
 
</form>




        </>
    )
}