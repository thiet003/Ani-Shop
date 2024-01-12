import './App.css';
import {Routes, Route,Link} from 'react-router-dom'
import Signup from './Container/Signup';
import Login from './Container/Login';
import Profile from './Container/Profile';
import Orders from './Container/Orders';
import OrderDetail from './Container/OrderDetail';
import Home from './Component/Home';

function App() {
    return (
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/order' element={<Orders/>} />
          <Route path='/order/:id' element={<OrderDetail/>} />
        </Routes>
      </div>

      
    );
}

export default App;
