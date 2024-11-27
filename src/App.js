import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Books from './components/Books';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './css/Index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Books />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
