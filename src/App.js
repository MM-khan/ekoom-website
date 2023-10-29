import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Garden from './facilities/Garden';
import Facility from "./facilities/Facility";
import Drainage from "./facilities/Drainage";
import Building from "./facilities/Building"
import Gallery from './pages/Gallery';
import AdminData from './pages/AdminData';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/contact' element={<Contact />}/>

          <Route path='/admin' element={<AdminData />}/>
          
          <Route path='/garden' element={<Garden />}/>
          <Route path='/facility' element={<Facility />}/>
          <Route path='/drainage' element={<Drainage />}/>
          <Route path='/building' element={<Building />}/>
        </Routes>
    </div>
  );
}

export default App;
