import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Friends from "./pages/Friends.js";
import Search from "./pages/Search.js";
import Settings from "./pages/Settings.js";
import Profile from "./pages/Profile.js";
import Landing from "./pages/Landing.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute path="/friends" component={Friends} />
          <PrivateRoute path="/settings" component={Settings} />

          <Route exact path="/">
            currentUser ? <Redirect to="/login" /> : <Landing />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="*">
            <h1>Page not found</h1>
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}
