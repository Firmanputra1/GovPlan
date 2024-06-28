import React, { useState } from 'react';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer'; // Sesuaikan path-nya
import Sidebar from './pages/Sidebar'; // Sesuaikan path-nya
import Content from './pages/Content'; // Sesuaikan path-nya
import Calender from './pages/Calender'; // Sesuaikan path-nya

function App() {
    const [content, setContent] = useState('home'); // State untuk menentukan konten yang ditampilkan

    const handleSidebarClick = (contentType) => {
        setContent(contentType); // Mengatur state berdasarkan tombol yang diklik
    };

    let contentComponent;

    switch (content) {
        case 'home':
            contentComponent = <Content />;
            break;
        case 'calender':
            contentComponent = <Calender />;
            break;
        // Tambahkan case untuk konten lain jika diperlukan
        default:
            contentComponent = <Content />;
    }

    return (
        <div className="App">
            <Sidebar onSidebarClick={handleSidebarClick} />
            <div className="content">
                <Header />
                {contentComponent}
                <Footer />
            </div>
        </div>
    );
}

export default App;
