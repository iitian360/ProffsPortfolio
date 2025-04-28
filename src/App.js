import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Acedamics from './components/Acedamics';
import Research from './components/Research';
import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main-container">
        <Home />
        <About />
        <Acedamics />
        <Research />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
