export const CustomList=(props)=>{
    const {list}=props
    return (
        <ul>
            {
                
                
                    list.map((eachFruit)=>{
                        return <li>{eachFruit}</li>
                    })
                  
                          
            }
        </ul>
    )
}
export const CustomOrderList=()=>{
    return (
        <ol>
           <List></List>
        </ol>
    )
}

export const List=()=>{

    const Fruits=["apple","orange","banana"]
    return (
        <>

      
        </>
    )
}


