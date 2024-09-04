import { useRef, useState } from "react";
import axios from "axios"

export const UncontrolledForm=()=>{
const [formErrors,setFormsErrors]=useState({})
const userNameRef=useRef("")
const passwordRef=useRef("")


const onSubmit=(event)=>{
    event.preventDefault();
    const userNameEntered=userNameRef.current.value;
    const passwordEntered=passwordRef.current.value;
    const formErrors=validations(userNameEntered,passwordEntered)
    console.log(formErrors);
    if(Object.keys(formErrors).length>0){
      setFormsErrors(formErrors)
    }
    else{
      loginApi(userNameEntered,passwordEntered);
    }
}
const validations=(username,password)=>{
    const formErrors={};
    if(!username){
        formErrors.userNameError="you must enter the username "
    }
    else if(username.length>20){
        formErrors.userNameError="characters should be less than 20"
    }
    if(!password){
        formErrors.passwordError="you must enter the password "
    }
    else if(password.length>20){
        formErrors.passwordError="characters should be less than 20"
    }
    return formErrors

}

const loginApi=async(username,password)=>{
 try{
  const data=await axios.post("https://dummyjson.com/auth/login",{
    "username":username,
    "password":password
  })
  console.log(data);}
  catch(err){
    console.log(err);
  }

}


    return(
        <form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="username">User Name:</label>
    <input type="text" className="form-control" id="email" ref={userNameRef}/>
    <span style={{color:"red"}}>{formErrors?.userNameError}</span>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef} />
    <span style={{color:"red"}}>{formErrors?.passwordError}</span>
  </div>
  <div className="checkbox">
    <label>
      <input type="checkbox" /> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>
    )
}