import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home";
import {Routes, Route} from 'react-router-dom'
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} /> 
      </Routes>
    </div>
  );
}

export default App;
