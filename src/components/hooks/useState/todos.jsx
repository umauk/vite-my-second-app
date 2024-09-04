import { useState } from "react"
import { CreateTodoList } from "./jshelpers"


export const CustomTodo=()=>{
    const [todo,settodo]=useState(CreateTodoList())
    const addItemHandler=()=>{
        const currentLength=todo.length;
        const myObject={
            id:currentLength+1,
            text:`item ${currentLength+1}`
        }
        settodo([...todo,myObject])

    }

    const deleteHandler=(targetId)=>{
        const todoFilter=todo.filter(eachTodo=>{
           return eachTodo.id !== targetId
        })
        settodo(todoFilter)
    }
   return(
    <>
    <h3>Custom Todo</h3>
    <button onClick={addItemHandler}>Add item</button>
    <ol>
    {
        
        todo.map(eachItem=>{
            const {id,text}=eachItem
            return(
                <div key={id} >
               
                <li >{text}</li>
                <button onClick={()=>deleteHandler(id)}>Delete Item</button>
                
                </div>


            )})
            
    }
    </ol>
    
    </>
   )
}
