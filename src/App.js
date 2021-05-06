import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Home from './components/Pages/Home/Home';
import Movies from './components/Pages/Movies';
import TVshows from './components/Pages/TVshows';
import People from './components/Pages/People';
import More from './components/Pages/More';

const App = () => {
  return (
    <div className="App">
     <NavBar/>

     <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/movies' component={Movies}/>
          <Route path='/tvshows' component={TVshows}/>
          <Route path='/people' component={People}/>
          <Route path='/more' component={More }/>

        </Switch>

    </div>
  );
}

export default App;


