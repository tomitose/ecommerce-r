import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cards from './components/Cards';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la App"/>
      <Cards title="Nike Shoes"/>
      <Cards title="Puma Shoes"/>
      <Cards title="Adidas Shoes"/>
    </div>
  );
}

export default App;
