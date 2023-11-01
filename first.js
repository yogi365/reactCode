function First(props){
    return(
        <ul>
           {
            props.fruits.map(fruit=><li>{fruit}</li>)
           }
        </ul>
    )
}


export default First;