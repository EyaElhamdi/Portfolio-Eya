import React, { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom'; 
import '../style/Login.css'; 

const Register = () => {
  const [email, setEmail] = useState(''); // État pour l'email
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const navigate = useNavigate(); 

  const handleRegister = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas'); 
      return; 
    }

    // je pourrais connecter une API ou stocker localement les infos
    alert('Compte créé avec succès 🎉'); 
    navigate('/'); 
  };

  return (
    <div className="login-container"> 
      <h2>Créer un compte</h2> 
      
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'état
          required 
        />
        
        <input
          type="password"
          placeholder="Mot de passe"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required // Champ obligatoire
        />
        
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
        
        <button type="submit">S’inscrire</button>
      </form>

      <p className="signup-link">
        Déjà un compte ?{' '}
        <Link to="/" className="signup-btn">
          Se connecter
        </Link>
      </p>
    </div>
  );
};

export default Register; 
