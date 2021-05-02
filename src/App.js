import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div className="App">
     <NavBar/>

     <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/customers' component={Home}/>
        </Switch>

    </div>
  );
}

export default App;


