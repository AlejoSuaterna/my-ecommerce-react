//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container/Container";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/Container/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemCount stock="15"></ItemCount>
      <ItemListContainer
        text1="Tecnología"
        text2="Gadgets"
        text3="Curiosidades"
      ></ItemListContainer>

      <header className="App-header"></header>

      <Container />
    </div>
  );
}

export default App;
