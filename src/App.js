import "./App.css";
import Discover from "./pages/discover/Discover";

import Footer from "./pages/footer/Footer";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Exploresection from "./pages/explorehomesection/Exploresection";
import Housedetails from "./pages/housedetails/Housedetails";
import Navbartrulia from "./pages/navbar/Navbartrulia";
function App() {
  return (
    <>
      <Navbartrulia />

      <BrowserRouter>
        <Routes>
          <Route path="/Exploresection" element={<Exploresection />} />
          <Route path="/" element={<Discover />} />
          <Route path="/housedetails/:category" element={<Housedetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
