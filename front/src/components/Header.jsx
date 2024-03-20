import { makeStyles } from '@mui/styles';
import AddInboxButton from './Button/AddInboxButton'; 

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000, 
  },
  title: {
    fontSize: theme.typography.h1.fontSize, 
    fontWeight: theme.typography.h1.fontWeight,
    color: theme.palette.common.white,
    margin: 0,
    textAlign: 'center',
    flex: 1, 
  },
  button: {
    marginRight: theme.spacing(10), // Espace à droite du bouton
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Ze FOCUS</h1>
      <div className={classes.button}>
        <AddInboxButton />
      </div>
    </header>
  );
}

export default Header;