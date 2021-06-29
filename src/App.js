import './App.scss';
import Button from '@material-ui/core/Button'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core'


const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  }
})

/* primero: #454545;
segundo: #b90000;
tercero: #f4ff00;
gris: #646464;
plata: #f5f5f5;
otroplata: grey;
funo: "Mukta",sans-serif;
fdos: "Montserrat",sans-serif; */



function App() {

  const classes = useStyles()

  return (
    <div style={{backgroundColor: 'var(--segundo)'}} className="App">
      <Button
        variant="primary"
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
