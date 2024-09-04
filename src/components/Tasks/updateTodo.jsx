import { useState } from "react"
import { CreateTodoList } from "../hooks/useState/jshelpers";




 export const UpdateTodoCards=()=>{
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

    const updateHandler = (id) => {
        const updatedTodo = todo.map(eachTodo => {
            if (eachTodo.id === id) {
                return { ...eachTodo, text: "this item has been updated" };
            }
            return eachTodo;
        });
        settodo(updatedTodo);
    };
   return(
    <>
    <h3>Custom Todo</h3>
    <button onClick={addItemHandler}>Add item</button>
    <ul>
    {
        
        todo.map(eachItem=>{
            const {id,text}=eachItem
            return(
                <div>
                    <li>{text}</li>
                    <button onClick={()=> deleteHandler(id)}>Delete Items</button>
                    <button onClick={()=> updateHandler(id)}>Update Items</button>
                </div>


            )})
            
    }
    </ul>
    
    </>
   )
}
