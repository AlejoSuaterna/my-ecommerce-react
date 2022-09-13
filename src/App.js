import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/List/ItemListContainer";
import QuienesSomos from "./Pages/QuienesSomos";
import Contactanos from "./Pages/Contactanos";
import ItemDetailContainer from "./Components/Detail/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:prodId" element={<ItemDetailContainer />} />
            <Route path="/QuienesSomos" element={<QuienesSomos />} />
            <Route path="/Contactanos" element={<Contactanos />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
