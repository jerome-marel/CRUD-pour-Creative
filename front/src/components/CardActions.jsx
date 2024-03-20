import { Card, Typography, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DeleteActionButton from './Button/DeleteActionButton';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    backgroundColor: 'transparent',
    position: 'relative',
    transition: 'transform 0.3s ease-in-out',
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
      background: 'linear-gradient(45deg, #FFD700, #FFA500)',
      opacity: 0,
      transition: 'opacity 0.3s ease-in-out',
    },
    '&:hover::before': {
      opacity: 1,
    },
  },
  cardContent: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  mainText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginRight: '10px', 
  },
}));

function CardAction({ id, text, onDelete }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.mainText}>
          {text}
        </Typography>
        <DeleteActionButton id={id} onDelete={onDelete} />
      </CardContent>
    </Card>
  );
}

export default CardAction;