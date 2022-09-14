import NavBar from './components/NavBar';
import './app/styles.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer contenido="Prueba de props" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
