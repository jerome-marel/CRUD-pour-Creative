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
      // Effectuer la requête POST avec Axios
      const response = await axios.post('/action/', { name });

      // Une fois l'action créée avec succès, rediriger l'utilisateur
      if (response.status === 201) {
        console.log('Action ajoutée avec succès:', response.data);
        navigate('/home/');
      } else {
        console.error('Erreur lors de l\'ajout de l\'action');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div>
      <h1>Action à rajouter</h1>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleValidation}>Ajouter</button>
    </div>
  );
};

export default AjoutAction;
