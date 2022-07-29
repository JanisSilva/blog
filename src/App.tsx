import React from 'react';
import NavBar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Router>
            <NavBar/>
            <div style={{ minHeight: '100vh' }}>
                <Routes> // Antigo Switch
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}
export default App;
