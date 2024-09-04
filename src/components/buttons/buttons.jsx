export const CustomButton=(props)=>{
    const {text="button",onPress=()=>{},bgcolor="green"}=props
    const buttonStyles={backgroundColor:"red", color:"white" }
    return(
        <button  style={buttonStyles} onClick={onPress}>{text}</button>
    )
}