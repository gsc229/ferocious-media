import './App.scss';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  }
})

function App() {

  const classes = useStyles()

  return (
    <div className="App">
      <Button className={classes.btn}>
        My Button
      </Button>
    </div>
  );
}

export default App;
