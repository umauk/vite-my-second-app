import { Link } from "react-router-dom"

export const NavBar=()=>{
  const linkStyle={textDecoration:"none",color:"blue"}
  const liStyle={margin:"10px"};
    return(
        <>
  {/* Grey with black text */}
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item" style={liStyle}>
          <Link to={"/"} style={linkStyle}>Main</Link>
        </li>
        <li className="nav-item" style={liStyle}>
        <Link to={"/about"} style={linkStyle}>about</Link>
        </li>

        <li className="nav-item" style={liStyle}>
        <Link to={"category"} style={linkStyle}>category</Link>
        </li>
        <li className="nav-item" style={liStyle}>
        <Link to={"products"} style={linkStyle}>products</Link>
        </li>
        <li className="nav-item" style={liStyle}>
        <Link to={"recipes"} style={linkStyle}>Recipes</Link>
        </li>
        
      </ul>
    </div>
  </nav>

</>
    )
}