
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import AppCars from './pages/AppCars';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/cars">Cars</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/cars">
            <AppCars />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
