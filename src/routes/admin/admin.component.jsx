import { useSelector } from 'react-redux';
import { selectAdminUser } from "../../store/user/user.selector";
import { addOrderToUserHistory } from '../../utils/firebase/firebase.utils';
import Button from '../../components/button/button.component'
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const AdminPage = () => {
    const adminHere = useSelector(selectAdminUser);
    const currentUser = useSelector(selectCurrentUser);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    const handler = () => {
        addOrderToUserHistory(currentUser,cartItems,cartTotal).then(user => console.log(user));
       //console.log(addOrderToUserHistory(currentUser));
    };

    return(
        <div>
            {adminHere?
            (
                <div>
                    <Button onClick={handler}/>

                </div>
            ):(
                <span>unauthorized</span>
            )}

        </div>    
        
    )

};

export default AdminPage;