import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home";
import {Routes, Route} from 'react-router-dom'
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/article/:id" element={<ArticlePage />} /> 
      </Routes>
    </div>
  );
}

export default App;
