import { useNavigate } from "react-router-dom"

export const InvalidScreen=()=>{
    const navigate=useNavigate()
    const handleNavigation=()=>{
        navigate("/")
    }

    return(
        <>
        <h2>Page not found</h2>
        <button onClick={handleNavigation}>home</button>
        </>
    )
}