import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import CardAction from './CardActions'; 
import { Grid } from '@mui/material';

function ActionsComponent() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    fetchActions();
  }, []);

  const fetchActions = async () => {
    try {
      const response = await axios.get('/');
      setActions(response.data);
    } catch (error) {
      console.error("Aucune action récupérée sur l'API :", error);
    }
  };

  const handleDeleteAction = async (id) => {
    try {
      console.log('Suppression de l\'action avec ID:', id);
      await axios.delete(`/action/${id}`);
      console.log('Action supprimée avec succès');

     
      setActions(prevActions => prevActions.filter(action => action.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression de l'action :", error);
    }
  };

  return (
    <Grid container spacing={1} justifyContent="center">
      {actions.map((action) => (
        <Grid item xs={12} key={action.id}>
          <CardAction id={action.id} text={action.name} onDelete={handleDeleteAction} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ActionsComponent;
