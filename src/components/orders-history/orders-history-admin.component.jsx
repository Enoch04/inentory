import OrdersList from "./orders-history.component";
import { OrderHistoryAdmin } from './orders-history.styles.jsx';

const OrdersListAdmin = ({ orderList }) => {
    // const { history } = orderDetails;
    const { displayName, email, history} = orderList;
    // const date = new Date(createdAt.seconds * 1000).toISOString();
    // console.log(history);

    

    return( 
        <OrderHistoryAdmin>
            <span className="user">{displayName}&nbsp; &nbsp;{email} </span>
            
        {history.lenght != 0 && history.map((order) => (
            <OrdersList key={order.orderNumber} details={order} orderList={order.details}/>
        ))}
        </OrderHistoryAdmin>
    )
};

export default OrdersListAdmin;