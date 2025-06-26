import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import MenuItemDetail from "./pages/MenuItemDetail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:id" element={<MenuItemDetail />} />
        <Route path="reservations" element={<Reservations />} />
      </Route>
    </Routes>
  );
}

export default App;
