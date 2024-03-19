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

  return (
    <Grid container spacing={1} justifyContent="center">
      {actions.map((action) => (
        <Grid item xs={12} key={action.id}>
          <CardAction id={action.id} text={action.name} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ActionsComponent;
