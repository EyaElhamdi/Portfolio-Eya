import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import '../style/Login.css';

const Login = () => {
  const [email, setEmail] = useState(''); // État pour stocker l'email tapé
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook pour naviguer vers une autre route


  const handleLogin = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (email === 'ayouta@gmail.com' && password === 'ayouta') {
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      alert('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'état au changement
          required  
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>

      <p className="signup-link">
        Pas encore de compte ?{' '}
        <Link to="/register" className="signup-btn">
          Créer un compte
        </Link>
      </p>
    </div>
  );
};

export default Login;
