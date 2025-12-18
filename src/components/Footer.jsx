import React from 'react'; 
import '../style/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer"> 
      <p>© 2025 MonPortfolio. Tous droits réservés.</p> 
      <p>Suivez-moi sur : 
        <a href="https://github.com/EyaElhamdi" target="_blank" rel="noreferrer"> GitHub</a> | {/* Lien GitHub */}
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"> LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer; 
