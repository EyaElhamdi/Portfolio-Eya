import React from 'react'; 
import '../style/DarkMode.css'; 

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="darkmode-btn" // applique le style CSS
      onClick={() => setDarkMode(!darkMode)} // inverse le mode sombre
    >
      {darkMode ? "🌙" : "☀️"} 
    </button>
  );
};

export default DarkModeToggle; 