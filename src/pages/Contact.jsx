import React, { useState } from 'react'; 
import '../style/Contact.css';

const Contact = () => {
  // États pour stocker les valeurs du formulaire
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState('');

  // Fonction appelée à l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    alert(`Merci ${name}, votre message a été envoyé !`); 
    setName(''); // réinitialise le champ nom
    setEmail(''); 
    setMessage(''); 
  };

  return (
    <div className="contact-container"> 
      <h2>Contactez-moi</h2> 
      <p>Remplissez le formulaire ci-dessous pour m’envoyer un message :</p> 

      <form onSubmit={handleSubmit}>   {/*consiste à gérer les changement , updating */}
        <input 
          type="text" 
          placeholder="Nom" 
          value={name} 
          onChange={(e) => setName(e.target.value)} // met à jour l'état name
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} // met à jour l'état email et l'enregistre 
          required 
        />
        <textarea 
          placeholder="Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
          rows="6"
        ></textarea>
        <button type="submit">Envoyer</button> 
      </form>
    </div>
  );
};

export default Contact; 
