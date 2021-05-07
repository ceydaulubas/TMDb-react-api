import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Home from './components/Pages/Home/Home';
import Movies from './components/Pages/Movies';
import TVshows from './components/Pages/TVshows';
import People from './components/Pages/People';
import More from './components/Pages/More';
import SearchMovieList from './components/Pages/Home/SearchedMovieList';
import MovieDetail from './components/Pages/Home/MovieDetail';
import NotFound from './components/Pages/NotFound';


const App = () => {
  return (
    <div className="App">
     <NavBar/>

     <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/tvshows' component={TVshows}/>
          <Route path='/people' component={People}/>
          <Route path='/more' component={More }/>
          <Route path= '/search' component ={SearchMovieList} />
          <Route exact path='/movie' component={Movies}/>
          <Route path="/movie/:id" exact component={MovieDetail} />
          <Route component={NotFound} />
        </Switch>

    </div>
  );
}

export default App;


