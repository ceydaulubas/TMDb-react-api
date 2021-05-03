import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Home from './components/Pages/Home/Home';
import Filmler from './components/Pages/Filmler';
import Diziler from './components/Pages/Diziler';
import Kisiler from './components/Pages/Kisiler';
import DahaFazla from './components/Pages/DahaFazla';

const App = () => {
  return (
    <div className="App">
     <NavBar/>

     <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/filmler' component={Filmler}/>
          <Route path='/diziler' component={Diziler}/>
          <Route path='/kisiler' component={Kisiler}/>
          <Route path='/daha-fazla' component={DahaFazla}/>

        </Switch>

    </div>
  );
}

export default App;


