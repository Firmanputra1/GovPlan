import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Header from './pages/Header'; // Import Header dari lokasi yang benar
import Footer from './pages/Footer'; // Import Footer dari lokasi yang benar

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ paddingBottom: '60px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
