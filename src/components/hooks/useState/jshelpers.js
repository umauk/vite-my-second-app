
export const CreateTodoList=()=>{
    const todo=[];
     for(let i=1;i<=2;i++){
      const myObject={
            id:i,
            text:`item ${i}`,
        };
        todo.push(myObject)
     }
    
     console.log(todo);
     return todo;
}
CreateTodoList();