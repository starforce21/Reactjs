import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* whatever it written in between browserrouter and routes is always on page */}
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      {/* whatever it written in between browserrouter and routes is always on page */}
      <Footer />
    </div>
    
    </BrowserRouter>
  );
}

export default App;
