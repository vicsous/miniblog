import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
import PublicRoute from "./components/PublicRoute";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <PrivateRoute path="/friends" component={Friends} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/search" component={Search} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/profile" component={Profile} />

          <PublicRoute exact path="/" component={Landing} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />

          <Route path="*">
            <h1>Page not found</h1>
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}
