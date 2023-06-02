// import {Switch , Route} from "react-router"
import './App.css';
import Home from './Components/HomePage';
import MovieDetails from "./Components/MovieDetails";
import CharacterDetails from './Components/CharacterDetails';
import PlanetDetails from './Components/PlanetDetails';
import StarShips from './Components/StarShips';
import {Switch , Route} from "react-router"
// import {Routes , Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
       <header className ="App-header">

    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={MovieDetails} />
        <Route exact path='/planets/:id' component={PlanetDetails}/>
        <Route exact path = '/people/:id' component = {CharacterDetails} />
        <Route exact path = '/starships/:id' component={StarShips} />
    </Switch>

      </header>
    </div>
  );
}

export default App;
