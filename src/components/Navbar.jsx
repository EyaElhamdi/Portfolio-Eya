import React, { useContext } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../AuthContext'; 
import '../style/Navbar.css'; 

const Navbar = ({ resumeData }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext); // Récupère l'état de connexion
  const navigate = useNavigate(); 

  const handleLogout = () => { // Fonction pour déconnexion
    setIsLoggedIn(false); // Déconnecxion
    navigate('/login'); // Redirige vers la page login
  };

  return (
    <header id="home"> {/* Header principal */}
      <nav className="navbar"> {/* Barre de navigation */}
        <div className="logo">{resumeData?.name || "MonPortfolio"}</div> 

        <ul className="nav-links"> {/* Liste des liens */}
          <li><Link to="/home">Accueil</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {isLoggedIn && ( // Affiche le bouton déconnexion seulement si connecté
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Déconnexion
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
