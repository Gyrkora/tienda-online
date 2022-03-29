import "./App.css";
import "./components/NavBar";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { GlobalStyles } from "./global.style";
import { BrowserRouter } from "react-router-dom";
import { ItemListContainer } from "./Pages/ItemListContainer";

function App() {
  return (
    <div>
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
