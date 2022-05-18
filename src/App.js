import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Componentes
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';

// Views
import Inicio from './views/Inicio'
import Mercado from './views/Mercado'
import DetalleProducto from './views/DetalleProducto'
import About from './views/About'
import Contacto from './views/Contacto'


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
          <Navbar />  
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/categoria/:id" element={<Mercado /> } />
            <Route path="/item/:id" element={<DetalleProducto />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
