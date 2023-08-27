
const Item=(props)=>{
    
    return (
        // eslint-disable-next-line react/prop-types
            
        <div className="item" >
            <img src={props.src} alt="" />
            <div className="itemInfo">
                <h5>{props.name}</h5>
                <p>{props.about}</p>
                <button>${props.price}</button>
            </div>

        </div>
    );
}
export default Item;