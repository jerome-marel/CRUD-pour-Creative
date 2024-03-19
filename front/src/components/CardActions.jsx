import { Card, Typography, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Importez makeStyles à partir de @mui/styles

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1, 2),
    backgroundColor: 'transparent', // Définir la couleur de fond comme transparent
    position: 'relative', // Position relative pour les pseudo-éléments
    transition: 'transform 0.3s ease-in-out', // Transition pour l'effet de survol
    '&:hover': {
      transform: 'scale(1.02)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, #FFD700, #FFA500)', // Dégradé jaune soleil
      opacity: 0, // Par défaut, invisible
      transition: 'opacity 0.3s ease-in-out', // Transition pour l'effet de survol
    },
    '&:hover::before': {
      opacity: 1, // Au survol, rendre visible
    },
  },
  cardContent: {
    position: 'relative', // Pour empiler les textes sur le dégradé
    zIndex: 1, // Empiler au-dessus du dégradé
  },
  mainText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
}));

function CardAction({ id, text }) {
  const classes = useStyles();

  const handleClick = () => {
    // Gérer le clic sur le bouton avec l'ID
    console.log(`Bouton cliqué pour l'ID: ${id}`);
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.mainText}>
          {text}
        </Typography>
        <Button onClick={handleClick} variant="contained" color="primary">
          Voir détails
        </Button>
      </CardContent>
    </Card>
  );
}

export default CardAction;
