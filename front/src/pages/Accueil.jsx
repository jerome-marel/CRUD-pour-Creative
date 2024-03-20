import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Accueil() {
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  Renvoie vers la page Home après le saisie du prénom de l'utilisateur
    navigate('/home', { state: { firstName: firstName } });
  };

  return (
    <div>
      <h1>Entrez votre prénom</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Votre prénom"
          value={firstName}
          onChange={handleInputChange}
        />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default Accueil;
