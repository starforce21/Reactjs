import "./App.css";
import ShipList from "./components/ShipList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<ShipList />} />
          <Route path="home" element={<ShipList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
