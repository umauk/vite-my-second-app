/*import { useState } from "react"
import { CreateTodoList } from "../hooks/useState/jshelpers";
import TaskCards from "./taskCards";



export const CustomTodoCards=()=>{
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
    <ul>
    {
        
        todo.map(eachItem=>{
            const {id,text}=eachItem
            return(
                <li key={id}>
                    <TaskCards text={text} deleteTaskHandler={()=>deleteHandler(id)}/>
                </li>


            )})
            
    }
    </ul>
    
    </>
   )
}
import { useState } from "react";
import { CreateTodoList } from "../hooks/useState/jshelpers";
import TaskCards from "./taskCards";

export const CustomTodoCards = () => {
    const [todo, setTodo] = useState(CreateTodoList());

    const addItemHandler = () => {
        const currentLength = todo.length;
        const newItem = {
            id: currentLength + 1,
            text: `Item ${currentLength + 1}`
        };
        setTodo([...todo, newItem]);
    };

    const deleteHandler = (targetId) => {
        const updatedTodo = todo.filter(eachTodo => eachTodo.id !== targetId);
        setTodo(updatedTodo);
    };

    // Function to split todo items into rows of N columns
    const splitIntoRows = (array, itemsPerRow) => {
        const rows = [];
        for (let i = 0; i < array.length; i += itemsPerRow) {
            rows.push(array.slice(i, i + itemsPerRow));
        }
        return rows;
    };

    const itemsPerRow = 3; // Set how many cards you want per row
    const todoRows = splitIntoRows(todo, itemsPerRow);

    return (
        <>
            <h3>Custom Todo</h3>
            <button onClick={addItemHandler}>Add item</button>
            <table className="table">
                <tbody>
                    {todoRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map(({ id, text }) => (
                                <td key={id}>
                                    <TaskCards text={text} deleteTaskHandler={() => deleteHandler(id)} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};*/
import { useState } from "react";
import { CreateTodoList } from "../hooks/useState/jshelpers";
import TaskCards from "./taskCards";

export const CustomTodoCards = () => {
    const [todo, setTodo] = useState(CreateTodoList());

    const addItemHandler = () => {
        const currentLength = todo.length;
        const newItem = {
            id: currentLength + 1,
            text: `Item ${currentLength + 1}`
        };
        setTodo([...todo, newItem]);
    };

    const deleteHandler = (targetId) => {
        const updatedTodo = todo.filter(eachTodo => eachTodo.id !== targetId);
        setTodo(updatedTodo);
    };

    
    const splitIntoRows = (array, itemsPerRow = 2) => {
        const rows = [];
        for (let i = 0; i < array.length; i += itemsPerRow) {
            rows.push(array.slice(i, i + itemsPerRow));
        }
        return rows;
    };

    const todoRows = splitIntoRows(todo);

    return (
        <>
            <h3>Custom Todo</h3>
            <button onClick={addItemHandler}>Add item</button>
            <table className="table">
                <tbody>
                    {todoRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map(({ id, text }) => (
                                <td key={id}>
                                    <TaskCards text={text} deleteTaskHandler={() => deleteHandler(id)} />
                                </td>
                            ))}
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};


