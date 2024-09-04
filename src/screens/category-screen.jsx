import { Link, Outlet } from "react-router-dom"

export const CategoryScreen=()=>{
    return(
        <>
       <div>category screen</div>
       <Link to={"jewelery"}>jewelery</Link>
       <Link to={"electronics"}>electronics</Link>
        <Outlet/>
        </>
    )
}