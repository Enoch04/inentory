import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import { SearchBox } from './admin.styles.jsx';

import { fetchOrdersStart } from '../../store/orders/orders.action';
import { selectAdminUser } from '../../store/user/user.selector';
import { selectOrders } from '../../store/orders/orders.selector';
import OrdersListAdmin from '../../components/orders-history/orders-history-admin.component';
import Button from '../../components/button/button.component'

const AdminPage = () => {
    const adminHere = useSelector(selectAdminUser);
    const ordersHistory = useSelector(selectOrders);
    const [ orders, setOrders ] = useState([]);
    const [ searchField, setSearchField ] = useState('');
    const [ searchFieldOrder, setSearchFieldOrder ] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrdersStart());
    }, [dispatch]);

    useEffect(() => {
        setOrders(ordersHistory.filter(user => 
            user.displayName.toLowerCase().includes(searchField.toLowerCase()) ||
            user.email.toLowerCase().includes(searchField.toLowerCase())
        ))
    },[searchField])


    // useEffect(() => {
        // const ordersHistory.map(user => {
            // user.history = user.history.filter(order =>  
                // order.orderNumber.includes(searchFieldOrder));
        // });
        // console.log(orders);              
        // setOrders(ordersHistory);
    // },[searchFieldOrder])


    const handler = () => {
        const array = ordersHistory.map(user => {
            user.history = user.history.filter(order =>  
                order.orderNumber.includes(searchFieldOrder));
        });
        console.log(array);              
        //setOrders(ordersHistory);
    };

    const onChangehandler = (event) => {
        setSearchField(event.target.value);
    };

    const onChangeOrderhandler = (event) => {
        setSearchFieldOrder(event.target.value);
    };

    return(
        <Fragment>
            {adminHere?
            (
                <div>
                    <SearchBox>
                        <span>
                            <span>User lookup: </span>
                            <input
                                className='search-box'
                                type='search'
                                placeholder='search users'
                                onChange={onChangehandler}
                            />
                        </span>
                        <span>
                            <span>Order lookup: </span>
                            <input
                                className='search-box'
                                type='search'
                                placeholder='search orders'
                                onChange={onChangeOrderhandler}
                            />
                        </span>
                        
                    </SearchBox>
                    {orders.map(user => (
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

        </Fragment>    
        
    )

};

export default AdminPage;