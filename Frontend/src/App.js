import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Pengingat from './pages/Pengingat';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ paddingBottom: '60px' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/pengingat" element={<Pengingat />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
