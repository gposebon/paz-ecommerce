import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Componentes
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';

// Views
import Inicio from './views/Inicio'
import Verduras from './views/Verduras'
import DetalleProducto from './views/DetalleProducto'
import Tambo from './views/Tambo'
import Envasados from './views/Envasados'
import Carrito from './views/Carrito'

/* 
1 - Note que en tu array de productos esta faltando la propiedad de categoría. 
Sin esta propiedad no vamos a podes navegar entre las diferentes categorías 
(es un requerimiento de esta entrega) . Podes definir al menos 3 categorías diferentes, 
incluirlas en en Navbar de tal forma que al hacerle click me muestre solo esa categoría de productos 
y no todos (como lo haces en la home). 
Te doy una pista... para lograr navegar entre las categorías debemos trabajar sobre el componente 
ItemListContainer, leer el parámetro que viaja por la url, capturar el nombre de la categoría y hacer 
un filtro con el método "Filter" de tu array de productos ( que dicho sea de paso yo los colocaría 
(a tu array) en un archivo separado/independiente para no sobrecargar  de codigo tu componente)
*/ 


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
          <Navbar />  
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/verduras" element={<Verduras />} />
            <Route path="/item/:id" element={<DetalleProducto />} />
            <Route path="/tambo" element={<Tambo />} />
            <Route path="/envasados" element={<Envasados />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
