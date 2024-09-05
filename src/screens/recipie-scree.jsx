import axios from "axios";
import { useEffect, useState } from "react"
import { CustomList } from "../components/lists/lists";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const RecipeScreen=()=>{
    const [recipesData,setRecipesData]=useState([]);
    const [search,setSearch]=useState("")
    useEffect(()=>{
        fetchData();
    },[search])
    const fetchData=async()=>{
        const response= await axios.get(`https://dummyjson.com/recipes/search?q=${search}`)
        if(response.status==200){
            setRecipesData(response.data.recipes)
            console.log(response.data.recipes)
        }
    }

    const searchHandler=(event)=>{
        event.preventDefault();
        setSearch(event.target.value);
  
      }

    return(
        <>
        <h3>List of Recipes </h3>

        <div>
          <input
          type="text"
          value={search}
          onChange={searchHandler}
          placeholder="search"/>
        </div>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>TITLE</th>
          <th>IMAGE</th>
          <th>INGREDIENTS</th>
          <th>INFO</th>
        </tr>
      </thead>
      <tbody>
        

      {
            recipesData.map(each=>
                <tr key={each.id}>
                <td>{each.id}</td>
                <td>{each.name}</td>
                <td><img src={each.image} width={200} height={200}/></td>
                <td><CustomList list={each.ingredients}  /></td>
                <td><button><Link to={`${each.id}`}>view Recipe</Link></button></td>
              </tr>  
            )
         
        }



      </tbody>
    </Table>
        </>
        
    )
}