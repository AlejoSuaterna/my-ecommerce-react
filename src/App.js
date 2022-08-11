import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./Components/Container/Container";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetail from "./Pages/ItemDetail";
import QuienesSomos from "./Pages/QuienesSomos";
import Contactanos from "./Pages/Contactanos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path="/detail/:prodId" element={<ItemDetail />} />
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
