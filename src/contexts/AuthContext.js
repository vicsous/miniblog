import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useHistory } from "react-router-dom";

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const history = useHistory();

  const [currentUser, setUser] = useState();
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'credentials': 'include'

      },
      body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(res => {
      if (res.success) {
        localStorage.setItem('refresh_token', res.token);
        history.push('/home');
      }
      else {
        alert('error')
      }
    })
  }

  function logout() {
    alert('User logged out!')
    return setUser()
  }

  function signup(email, username, password) {
    axios.post('http://localhost:3001/signup', {
      email: email,
      username: username,
      password: password
    })
    .then(() => { 
      alert(`User "${username.toLowerCase()}" created`)
      return setUser({ username: username, email: email, name: username})
    })
    .catch(e => {
      alert(e.message)
    })
  }

  useEffect(() => {
    setLoading(false);
    alert('teste');

    return function unsubscribe () {
      if (!currentUser) {
        alert('user not logged');
      }
    }
  }, [])

  const value = {
    currentUser,
    login,
    logout,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      { loading ?  <Spinner /> : <>{children}</>}
    </AuthContext.Provider>
  )
}
