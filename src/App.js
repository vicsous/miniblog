import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Friends from './pages/Friends.js';
import Search from './pages/Search.js';
import Settings from './pages/Settings.js';
import Profile from './pages/Profile.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />  
        </Route>

        <Route path='/login'>
          <Login />  
        </Route>

        <Route path='/register'>
          <Register />  
        </Route>

        <Route path='/friends'>
          <Friends />  
        </Route>

        <Route path='/search'>
          <Search />  
        </Route>

        <Route path='/settings'>
          <Settings />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>
        
        <Route path="*">
          <h1>Page not found</h1>
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}
