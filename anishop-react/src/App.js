import logo from './logo.svg';
import './App.css';
import {ProductList} from './Component/Test/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Ani Shop</h1>
      <ProductList id={3}/>
    </div>
  );
}

export default App;
