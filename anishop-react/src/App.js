import './App.css';
import {Routes, Route,Link} from 'react-router-dom'
import Signup from './Container/Signup';
import Login from './Container/Signup';
import Profile from './Container/Signup';
import Orders from './Container/Signup';
import OrderDetail from './Container/Signup';
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
