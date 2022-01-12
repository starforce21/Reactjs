import Topping from "./Topping"


function ReceiptData(props) {
    return (
        <div id="person">
            <p>{props.item.person}</p>
            <p>Main: {props.item.order.main}</p>
            <p>Protein: {props.item.order.protein}</p>
            <p>Rice: {props.item.order.rice}</p>
            <p>Sauce: {props.item.order.sauce}</p>
            <Topping item={props.item.order.toppings.join(', ')}/>
            <p>Drink: {props.item.order.drink}</p>
            <p>Cost: ${props.item.order.cost}</p>
        </div>
    )
}
export default ReceiptData