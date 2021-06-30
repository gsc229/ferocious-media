import './App.scss';
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import WarehouseSearchPage from './Pages/WarehouseSearchPage';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/warehouse-search'>
          <WarehouseSearchPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
