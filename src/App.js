import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="App">
          <div>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path="/:tipoProducto" element={<ItemListContainer />}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
