import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

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
    },[searchField,ordersHistory])

    // useEffect(() => {
    //     setOrders(ordersHistory.filter(user => user.history.reduce((acc,order) => acc = order.orderNumber.includes(searchFieldOrder),[])))
    // },[searchFieldOrder])

    const handler = () => {
        ordersHistory.map(user =>{
            
            user.history.reduce((acc,order)=>{
                if(order.orderNumber.includes(searchFieldOrder)){
                    //console.log(order);
                    console.log("order up");
                    return acc = order;
                }
                console.log(acc);
            },[])
        })              
        //console.log(ordersHistory);
    };

    const onChangehandler = (event) => {
        setSearchField(event.target.value);
    };

    const onChangeOrderhandler = (event) => {
        setSearchFieldOrder(event.target.value);
    };

    return(
        <div>
            {adminHere?
            (
                <div>
                    <input
                        className='search-box'
                        type='search'
                        placeholder='search users'
                        onChange={onChangehandler}
                    />
                    <input
                        className='search-box'
                        type='search'
                        placeholder='search orders'
                        onChange={onChangeOrderhandler}
                    />
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

        </div>    
        
    )

};

export default AdminPage;