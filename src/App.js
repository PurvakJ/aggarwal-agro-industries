import React, { useState } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Workplace from './pages/Workplace';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'workplace':
        return <Workplace />;
      case 'contact':
        return <Contact />;
      default:
        return <Workplace />; // fallback
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

      {/* ✅ pass setCurrentPage */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
