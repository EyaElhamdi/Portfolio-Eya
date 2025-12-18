import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from "./pages/ProjectDetail";
import DarkModeToggle from './components/DarkModeToggle';
import './style/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Appliquer le thème au body
  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
  <Router>
    {isLoggedIn && <Navbar />}
    {isLoggedIn && <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />}
    
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
      <Route path="/projects" element={isLoggedIn ? <Projects /> : <Navigate to="/login" />} />
      <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
      <Route path="/projects/:id" element={isLoggedIn ? <ProjectDetail /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>

    {isLoggedIn && <Footer />}
  </Router>
</AuthContext.Provider>

  );
}

export default App; 