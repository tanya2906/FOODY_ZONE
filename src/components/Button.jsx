const Button=(props)=>{
    return(
        // eslint-disable-next-line react/prop-types
        <button onClick={props.onClick}  id={props.id}>{props.text}</button>
    );
}
export default Button;