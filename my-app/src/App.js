import "./App.css";
import "./components/NavBar";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { GlobalStyles } from "./global.style";
import { BrowserRouter } from "react-router-dom";
import { ItemListContainer } from "./Pages/ItemListContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <NavBar />
        <Header />
        <ItemListContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
