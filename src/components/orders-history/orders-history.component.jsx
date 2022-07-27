import CartItem from "../cart-item/cart-item.component";

const OrdersList = ({ orderList, details }) => {
    // const { history } = orderDetails;
    const { total, orderNumber, createdAt } = details;
    const date = new Date(createdAt.seconds * 1000).toISOString();
    return( 
        <div>
            <div>{date}</div>
            <div> {total}  {orderNumber} </div>
        {
        orderList.map(obj => (<CartItem cartItem={obj} />))}
        </div>
    )
};


export default OrdersList;