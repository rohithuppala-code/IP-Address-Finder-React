import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyIpPage from './pages/MyIpPage';
import HomePage from './pages/HomePage';
import LocationIpPage from './pages/LocationIpPage';
import Footer from './components/Footer';
import './styles/index.css';
import './styles/components.css';
import './styles/pages.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-ip" element={<MyIpPage />} />
            <Route path="/location-ip" element={<LocationIpPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;