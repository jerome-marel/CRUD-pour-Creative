import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';

const AjoutAction = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleValidation = async () => {
    try {
      await axios.post('/action', { name });
      console.log('Action ajoutée:', name);
      navigate('/');
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'action :", error);
    }
  };

  return (
    <div>
      <h1>Ajouter une action</h1>
      <label>
        Nom de l'action:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button onClick={handleValidation}>Valider</button>
    </div>
  );
};

export default AjoutAction;
