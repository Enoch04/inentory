import OrdersList from "./orders-history.component";

const OrdersListAdmin = ({ orderList }) => {
    // const { history } = orderDetails;
    const { displayName, email, history} = orderList;
    // const date = new Date(createdAt.seconds * 1000).toISOString();
    console.log(history);



    return( 
        <div>
            <div>{displayName}  {email}</div>
            
        {history && history.map((order) => (
            <OrdersList key={order.orderNumber} details={order} orderList={order.details}/>
        ))}
        </div>
    )
};

export default OrdersListAdmin;