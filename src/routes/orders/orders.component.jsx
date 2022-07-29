import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOrdersStart } from '../../store/orders/orders.action';
import { selectOrders } from '../../store/orders/orders.selector';
import Button from '../../components/button/button.component'
import { selectCurrentUser } from '../../store/user/user.selector';

import OrdersList from '../../components/orders-history/orders-history.component';

const Orders = () => {
    const currentUser = useSelector(selectCurrentUser);
    const ordersFirestore = useSelector(selectOrders);
    const {orderHistory} = ordersFirestore.reduce((acc, order) => {
        if(order.email === currentUser.email){
            acc["orderHistory"] = order.history;
        }
        return acc;
    },{});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrdersStart());
    }, [dispatch]);

    const handler = () => {
        
       console.log(currentUser.uid === 'ofO0ZKIlRzfzNQOoNvKcKFR7q4x1');
        
    };

    return(
        <div>
            { currentUser?
            (
                <div>
                    {orderHistory && orderHistory.map((order) => (
                        <OrdersList key={order.orderNumber} details={order} orderList={order.details}/>
                    ))}
                    <Button onClick={handler}>Get Items</Button>
                </div>
            ):(
                <span>unauthorized</span>
            )}

        </div>    
        
    )

};

export default Orders;