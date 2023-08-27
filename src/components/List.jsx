
import Item  from "./Item";

const List=(props)=>{
    
    
    return(
        <div className="mainList">
            {
                props.foodItems.map(
                    (item)=>(
                        <Item src={item.image} name={item.name} about={item.text} price={item.price.toFixed(2)} key={item.name}/>
                    )
                )
            }
            {/*<Item src="/image/Ellipse 1.png" name="BOILED EGGS" about="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. " price="10.00"/>
            <Item src="/image/Ellipse 2.png" name="RAMEN" about="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. " price="25.00"/>
            <Item src="/image/Ellipse 3.png" name="GRILLED CHICKEN" about="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. " price="45.00"/>
            <Item src="/image/Ellipse 4.png" name="CAKE" about="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. " price="18.00"/>
            <Item src="/image/Ellipse 5.png" name="BURGER" about="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. " price="23.00"/>
            <Item src="/image/Ellipse 6.png" name="PANCAKE" about="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. " price="25.00"/>
        */}
        </div>
    );
}
export default List;