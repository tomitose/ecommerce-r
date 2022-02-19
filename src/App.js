import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route exact path='/category/:categoryId' component={ItemListContainer}/>
        <Route exact path='/product/:productId' component={ItemDetailContainer}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
