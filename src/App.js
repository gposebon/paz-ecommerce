import './App.css';
import ItemListContainer from './components/Cards/ItemListContainer';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';



function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Navbar />  
      </header>
      <ItemListContainer verdura="Lechuga"></ItemListContainer>
    </div>
  );
}

export default App;
