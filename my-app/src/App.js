import "./App.css";
import "./components/NavBar";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { GlobalStyles } from "./global.style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import { ItemList } from "./components/ItemList";
import { Cart } from "./components/Cart";
import { CartContextProvider } from "./context/CartContext";


function App() {


  return (
    <div>
      <Router>
        <CartContextProvider>
          <NavBar />
          <GlobalStyles />

          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/categoria/:categoriaId" element={<ItemList />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/detalle/:detalleId" element={<DetailPage />} />
          </Routes>
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
