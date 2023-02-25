import "./App.css";
import Navbar from "./pages/navbar/Navbartrulia";
import Discover from "./pages/discover/Discover";
import Explore from "./pages/explore/Explore";
import Truliahelp from "./pages/truliahelp/Truliahelp";
import Searchneigh from "./pages/searchneighbor/Searchneigh";
import Discoverplace from "./pages/discoverplace/Discoverplace";
import Footer from "./pages/footer/Footer";
import Footerlast from "./pages/footerlast/Footerlast";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Exploresection from "./pages/explorehomesection/Exploresection";
import Housedetails from "./pages/housedetails/Housedetails";
import Navbartrulia from "./pages/navbar/Navbartrulia";

import Home from "./pages/Home/Home";
import Navbarr from "./pages/housedetails/Similarhouse/Similarhouse";
import Similarhouse from "./pages/housedetails/Similarhouse/Similarhouse";
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
    </>
  );
}

export default App;