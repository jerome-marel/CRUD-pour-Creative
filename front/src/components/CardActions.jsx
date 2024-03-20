import { Card, Typography, CardContent, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DeleteActionButton from './Button/DeleteActionButton';
import ModifActionButton from './Button/ModifActionButton';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    background: '#FFFFFF',
    position: 'relative',
    transition: 'transform 0.3s ease-in-out', // Transition pour l'effet de survol
    '&:hover': {
      transform: 'scale(1.02)',
      background: 'linear-gradient(45deg, #FFD700, #FFA500)',
    },
  },
  cardContent: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  mainText: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    color: theme.palette.text.primary,
    marginRight: '10px',
  },
}));

function CardAction({ id, text, onDelete, onEdit }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Typography className={classes.mainText}>
              {text}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Grid container spacing={1}>
              <Grid item>
                <DeleteActionButton id={id} onDelete={onDelete} />
              </Grid>
              <Grid item>
                <ModifActionButton id={id} onEdit={onEdit} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CardAction;
