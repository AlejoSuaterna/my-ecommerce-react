import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./Components/Container/Container";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import QuienesSomos from "./Pages/QuienesSomos";
import Contactanos from "./Pages/Contactanos";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemCategoryContainer from "./Components/ItemCategoryContainer/ItemCategoryContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:prodId" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemCategoryContainer />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/Contactanos" element={<Contactanos />} />
        </Routes>
      </BrowserRouter>
      <header className="App-header"></header>
      <Container />
    </div>
  );
}

export default App;
