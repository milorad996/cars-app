
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import AddCar from './pages/AddCar';
import AppCars from './pages/AppCars';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/add">Add</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/cars">
            <AppCars />
          </Route>
          <Route exact path="/add">
            <AddCar />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
