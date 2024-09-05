import { Link, Outlet } from "react-router-dom"

export const CategoryScreen=()=>{
    const linkStyle={textDecoration:"none",color:"blue",margin:"10px"}
    return(
        <>
       <div>category screen</div>
       <Link to={"jewelery"} style={linkStyle}>jewelery</Link>
       <Link to={"electronics"} style={linkStyle}>electronics</Link>
        <Outlet/>
        </>
    )
}