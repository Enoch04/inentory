import CartItem from "../cart-item/cart-item.component";

const OrdersList = ({ orderList, details }) => {
    // const { history } = orderDetails;
    const { total, orderNumber, createdAt, paymentID } = details;
    const date = new Date(createdAt.seconds * 1000).toISOString();
    return( 
        <div>
            <div>{date}</div>
            <div> total${total}  order#{orderNumber} paymentID#{paymentID}</div>
        {
        orderList.map(obj => (<CartItem key={obj.id} cartItem={obj} />))
        }
        </div>
    )
};


export default OrdersList;