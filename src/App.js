import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Workplace from './pages/Workplace';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // ✅ Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // remove if you want instant scroll
    });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'workplace':
        return <Workplace />;
      case 'contact':
        return <Contact />;
      default:
        return <Workplace />;
    }
  };

  return (
    <div className="app">
      <Navigation
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <main className="main-content">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;