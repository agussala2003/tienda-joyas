import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartProvider from './components/context/CartContext';
import Cart from './components/Cart/Cart.js';

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="App">
          <div>
            <CartProvider>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path="/:tipoProducto" element={<ItemListContainer />}/>
              <Route path="/item/:id" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart />}/>
            </Routes>
            </CartProvider>
          </div> 
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
