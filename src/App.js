import NavBar from './components/NavBar';
import './app/styles.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer contenido="Prueba de props" />
    </div>
  );
}

export default App;
