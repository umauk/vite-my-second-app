export const mobileValidation=(value)=>{
    let errors="";
    const mobileRegex=/^[6-9][0-9]{9}$/
    if(!value){
        errors="enter the mobile number"
    }
    else if(!mobileRegex.test(value)){
        errors="please enter the correct mobile number"
    }
    return errors;
}