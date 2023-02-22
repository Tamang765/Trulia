import './App.css';
import Navbar from './pages/navbar/Navbartrulia';
import Discover from './pages/discover/Discover';
import Explore from './pages/explore/Explore';
import Newlylisted from './pages/newlylisted/Newlylisted';
import Truliahelp from './pages/truliahelp/Truliahelp';
import Searchneigh from './pages/searchneighbor/Searchneigh';
import Discoverplace from './pages/discoverplace/Discoverplace';
import Footer from './pages/footer/Footer';
import Footerlast from './pages/footerlast/Footerlast';
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import Exploresection from './pages/explorehomesection/Exploresection';
import Housedetails from './pages/housedetails/Housedetails';
import Navbartrulia from './pages/navbar/Navbartrulia';
function App() {
  return (
    <>
    <Navbartrulia/>
      <Discover/>
      <Explore/>
      <Newlylisted/>
      <Truliahelp/>
      <Searchneigh/>

      <Discoverplace/>

      <BrowserRouter>
        <Routes>
          <Route path='/Exploresection' element={<Exploresection/>}/>
          <Route path='/housedetails/:category' element={<Housedetails/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      <Footerlast/>
      
    </>
  );
}

export default App;
