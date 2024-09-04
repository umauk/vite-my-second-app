import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../screens/home-screen"
import { AboutScreen } from "../screens/about-screen"
import { NavBar } from "../components/navbar/navbar"
import { InvalidScreen } from "../screens/invalid-screen"

export const NavigationStack=()=>{
    return(
        <>
        <NavBar/>
       {
        true ?
        <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/about" element={<AboutScreen/>}/>
                <Route path="/*" element={<InvalidScreen/>}/>
            </Routes>
            :
            <Routes>
            <Route path="/login" element={<HomeScreen/>}/>
            
        </Routes>
       }
       </>
            
         
    )
}