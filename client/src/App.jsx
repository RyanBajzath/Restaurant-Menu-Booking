import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppointmentPage from "./pages/AppointmentPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/appointments" element={<AppointmentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
