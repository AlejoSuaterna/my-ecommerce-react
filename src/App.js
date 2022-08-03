import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container/Container";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/Container/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer></ItemListContainer>

      <header className="App-header"></header>

      <Container />
    </div>
  );
}

export default App;
