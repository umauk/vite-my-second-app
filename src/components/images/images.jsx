 export const CustomImages=(props)=>{
    const {source,width,height}=props
    return(
        <>
        <img src={source} height={height} width={width} />
        </>
    )
}