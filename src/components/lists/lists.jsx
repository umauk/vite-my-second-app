export const CustomList=(props)=>{
    console.log(props);
    const {list=[]}=props
    return (
        <ul>
            {
                
                
                    list.map((eachFruit,index)=>{
                        return <li key={index}>{eachFruit}</li>
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


