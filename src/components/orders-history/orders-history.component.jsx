
import OrderItem from '../order-item/order-itme.component';
import { OrdersContainer, OrdersHistoryContainer, DetailInfo } from './orders-history.styles'

const OrdersList = ({ orderList, details }) => {
    // const { history } = orderDetails;
    const { total, orderNumber, createdAt, paymentID } = details;
    const date = new Date(createdAt.seconds * 1000).toDateString();
    return( 
        <OrdersHistoryContainer>
            <DetailInfo>
                <div>
                    <span>{date}</span>&nbsp; &nbsp;
                    TOTAL: <span className='price'>&#36;{total}</span>
                </div>
                <div>
                    Order#<span>{orderNumber}</span>&nbsp; &nbsp; 
                    PaymentID: <span>{paymentID}</span>
                </div>
            </DetailInfo>
            <OrdersContainer>
            {
            orderList.map(obj => (<OrderItem key={obj.id} cartItem={obj} />))
            }
            </OrdersContainer>
        </OrdersHistoryContainer>
    )
};


export default OrdersList;