import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchOrdersStart } from '../../store/orders/orders.action';
import { selectAdminUser } from '../../store/user/user.selector';
import { selectOrders } from '../../store/orders/orders.selector';
import OrdersListAdmin from '../../components/orders-history/orders-history-admin.component';
import Button from '../../components/button/button.component'

const AdminPage = () => {
    const adminHere = useSelector(selectAdminUser);
    const ordersHistory = useSelector(selectOrders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrdersStart());
    }, [dispatch]);

    const handler = () => {
       ordersHistory.map(user => console.log(user));
        
    };

    return(
        <div>
            {adminHere?
            (
                <div>
                    {ordersHistory.map(user => (
                        <OrdersListAdmin orderList={user} />
                        ))
                    }
                    <Button onClick={handler}>
                        Admin page
                    </Button>

                </div>
            ):(
                <span>unauthorized</span>
            )}

        </div>    
        
    )

};

export default AdminPage;