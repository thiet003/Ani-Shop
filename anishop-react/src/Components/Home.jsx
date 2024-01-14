import React from 'react';
import {Link} from 'react-router-dom'
function Home() {
    function HandleClick(){
        sessionStorage.setItem("token","");
    }
    return (  
        <div>
            <h1>This is Home page</h1>
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/signup'>Signup</Link>
            <br />
            <Link to='/profile'>Profile</Link>
            <button onClick={HandleClick}>Đăng xuất</button>
            
        </div>
    );
}

export default Home;