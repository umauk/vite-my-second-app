import "./greetings.css"
import style from "./greeting.module.css"

export const Greeting=(props)=>{
    const {children,text}=props
    return(
        <div className={style.card}>
        <h4>good afternoon {children}</h4>
        </div>
    )
}