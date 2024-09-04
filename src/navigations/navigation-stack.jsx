import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../screens/home-screen"
import { AboutScreen } from "../screens/about-screen"
import { NavBar } from "../components/navbar/navbar"
import { InvalidScreen } from "../screens/invalid-screen"
import { CategoryScreen } from "../screens/category-screen"
import { ElectronicsScreen } from "../screens/electronics-screen"
import { JewelleryScreen } from "../screens/jwellery-screen"
import { ProductScreen } from "../screens/products-screen"
import { ProductDetailedScreen } from "../screens/product-detailed-screen"

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
                <Route path="/category" element={<CategoryScreen/>}>
                <Route index element={<ElectronicsScreen/>}/>
                <Route path="jewelery" element={<JewelleryScreen/>}/>
                <Route path="electronics" element={<ElectronicsScreen/>}/>
                </Route>
                <Route path="products" element={<ProductScreen/>}/>
                <Route path="products/:productsId" element={<ProductDetailedScreen/>}/>
            </Routes>
            :
            <Routes>
            <Route path="/login" element={<HomeScreen/>}/>
            
        </Routes>
       }
       </>
            
         
    )
}