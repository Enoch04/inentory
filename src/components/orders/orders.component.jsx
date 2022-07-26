import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOrdersStart } from '../../store/orders/orders.action';
import { getOrdersHistory } from "../../utils/firebase/firebase.utils";
import Button from '../../components/button/button.component'
import { selectCurrentUser } from '../../store/user/user.selector';

const Orders = () => {
    const currentUser = useSelector(selectCurrentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrdersStart());
    }, [dispatch]);

    const handler = () => {
        const newList = {};
        getOrdersHistory().then((order) => console.log(newList));
        
    };

    return(
        <div>
            {currentUser?
            (
                <div>
                    <Button onClick={handler}>Get Items</Button>

                </div>
            ):(
                <span>unauthorized</span>
            )}

        </div>    
        
    )

};

export default Orders;