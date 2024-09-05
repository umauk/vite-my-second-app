import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CustomList } from "../components/lists/lists";

export const RecipeDetailedScreen=()=>{
    const recipe=useParams();
    console.log(recipe,"recipeParams")
    const [recipeData,setRecipeData]=useState({})
    useEffect(()=>{
        fetchData();
    },[recipe])
    const fetchData = async () => {
        try {
          const response = await axios.get(` https://dummyjson.com/recipes/${recipe.recipesId}`);
          if (response.status === 200) {
            setRecipeData(response.data);
            console.log(response.data);
          }
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };
    return(
        <>
        <h1>{recipeData.name}</h1>
        <img src={recipeData.image} width={500} height={300}/>
        <h2>INSTRUCTIONS</h2>
        <CustomList list={recipeData.instructions }/>
        <h3>INGREDIENTS</h3>
        <CustomList list={recipeData.ingredients }/>

        </>
    )
}