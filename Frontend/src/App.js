import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
<<<<<<< HEAD
import Header from './pages/Header'; // Import Header dari lokasi yang benar
import Footer from './pages/Footer'; // Import Footer dari lokasi yang benar
import Tugas from './pages/Tugas';
=======
import Header from './pages/Header';
import Footer from './pages/Footer';
import Pengingat from './pages/Pengingat';

>>>>>>> 80791765524d4b292a4fd96140c2a25d24758fae
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
<<<<<<< HEAD
            <Route path="/tugas" element={<Tugas />} />
=======
            <Route path="/pengingat" element={<Pengingat />} />
>>>>>>> 80791765524d4b292a4fd96140c2a25d24758fae
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
