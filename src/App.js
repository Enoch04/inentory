import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import AdminPage from './routes/admin/admin.component';
import Orders from './routes/orders/orders.component';
import { setCurrentUser } from './store/user/user.action';
import Footer from './components/footer/footer.component';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import ContactUs from './routes/contact/contact.component';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='admin' element={<AdminPage />} />
        <Route path='orders' element={<Orders />} />
        <Route path='contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
