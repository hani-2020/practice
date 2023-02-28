import './Nav.css';
import './Star.css';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom"
import Stargen from './Stargen';
import Home from './Home';
import Coolweb from './Coolweb';
import About from './About';

function App() {
  return (<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/star-gen" element={<Stargen/>}/>
      <Route path="/cool-web" element={<Coolweb/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
