import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Words from './components/Words';
import About from './components/About';
import CS1 from './components/CS1';
import CS2 from './components/CS2';
import CS3 from './components/CS3';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/words" element={<Words />} />
            <Route path="/about" element={<About />} />
            <Route path="/cs1" element={<CS1 />} />
            <Route path="/cs2" element={<CS2 />} />
            <Route path="/cs3" element={<CS3 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
