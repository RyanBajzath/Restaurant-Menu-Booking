import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppointmentPage from "./pages/AppointmentPage";
import MenuPage from "./pages/MenuPage";
import Navbar from "./components/Navbar";
import FoodPage from "./pages/FoodPage";
import DessertPage from "./pages/DessertPage";
import DrinkPage from "./pages/DrinkPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/desserts" element={<DessertPage />} />
        <Route path="/drinks" element={<DrinkPage />} />
      </Routes>
    </>
  );
}

export default App;
