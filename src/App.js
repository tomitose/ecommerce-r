import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'typeface-raleway';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";
import Deals from "./pages/Deals";
import Home from "./pages/Home";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import CheckoutLastCard from "./components/Checkout/CheckoutLastCard/CheckoutLastCard";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/product/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/deals" element={<Deals/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/checkoutcard" element={<CheckoutLastCard/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
