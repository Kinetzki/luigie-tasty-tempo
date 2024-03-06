import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Promos from "./pages/Promos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/promotions" element={<Promos />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
