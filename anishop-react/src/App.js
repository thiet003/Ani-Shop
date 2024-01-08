import './App.css';
import {Routes, Route,Link} from 'react-router-dom'
import Signup from './Component/Signup/Signup';
import Home from './Component/Signup/Home';
import Login from './Component/Signup/Login';
import Profile from './Component/Profile/Profile';


function App() {
    return (
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </div>

      
    );
}

export default App;
