import { useEffect, useState } from 'react';
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
    const [ sortedOrders, setSortedOrders ] = useState(orderHistory);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrdersStart());
    }, [dispatch]);

    useEffect(() => {
        setSortedOrders(orderHistory.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)));
    },[ordersFirestore])

    const handler = () => {
        
        const sorted = orderHistory.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
        console.log(sorted);
        
    };

    return(
        <div>
            { currentUser?
            (
                <div>
                    {sortedOrders && sortedOrders.map((order) => (
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