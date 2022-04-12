import Home from './Components/Home';
import Auth from './Components/Auth';
import Login from './Components/Login';
import Register from './Components/Register' ;
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Invoices from './Components/Invoices';
import InvoiceDetail from './Components/InvoiceDetail';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';
import UserContext from './Context/UserContext';
import './App.css';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState(
    {
      username: '',
      password: '',
      isLogIn: false,
    },
  )
  return (
    <UserContext.Provider value={{username: userData.username, password: userData.password, isLogIn: userData.isLogIn, setUserData: setUserData}}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='products' element={<Products />}>
              <Route path=':productId' element={<ProductDetail />} />
            </Route>
            <Route path='invoices' element={<Invoices />}>
              <Route path=':invoiceId' element={<InvoiceDetail />} />
            </Route>
            <Route path='cart' element={<Cart />} />          
            <Route path='profile' element={<Profile />} />          
            <Route path='about' element={<About />} /> 
          </Route>                    
          <Route path='/auth' element={<Auth />} >
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>     
      </div>
    </UserContext.Provider>
  );
}

export default App;
