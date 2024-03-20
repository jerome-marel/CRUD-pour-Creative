import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';

const ModifAction = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAction();
  }, []); // Déclenche le fetchAction lors du chargement initial

  const fetchAction = async () => {
    try {
      const response = await axios.get(`/action/${id}`);
      setName(response.data.name); // Met à jour le state avec le nom de l'action
    } catch (error) {
      console.error("Erreur lors de la récupération de l'action :", error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleValidation = async () => {
    try {
      await axios.put(`/action/${id}`, { name });
      console.log('Action modifié:', name);
      navigate('/');
    } catch (error) {
      console.error("Erreur lors de la modification de l'action :", error);
    }
  };

  return (
    <div>
      <h1>Modifier une action</h1>
      <label>
        Nom de l'action:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button onClick={handleValidation}>Valider</button>
    </div>
  );
};

export default ModifAction;
