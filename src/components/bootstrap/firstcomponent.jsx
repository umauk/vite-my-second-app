import CustomDNAloader from "../loader/loader"
import CustomRectangleCard from "./customcard"

export const FirstComponent=()=>{
    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
      
        <CustomRectangleCard title="uday" text="React developer"/>
        
      </div>
      <div className="col-sm-4">
      <CustomRectangleCard title="kiran" text="Angular developer"/>
     
      </div>
      <div className="col-sm-4">
      <CustomRectangleCard title="Bhargav" text="Sevive-Now developer"/>
     
      </div>
    </div>
  </div>
</>  
    )
}