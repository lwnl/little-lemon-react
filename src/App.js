import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuItemDetail from "./pages/MenuItemDetail";
import Reservations from "./pages/Reservations";
import ConfirmReservation from "./pages/ConfirmReservation"
import ReservationSuccess from "./pages/ReservationSuccess"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:id" element={<MenuItemDetail />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="confirm-reservation" element={<ConfirmReservation />} />
        <Route path="reservation-success" element={<ReservationSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
