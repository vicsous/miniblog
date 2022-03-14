import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
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
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        setUser(res.user);
      }
      else {
        alert(res.message)
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
    /* Checking access token*/

    const refreshToken = localStorage.getItem('accessToken');

    async function getUserInfo (token) {
      if (token) {
        axios.post('http://localhost:3001/user', { refreshToken: token })
        .then(() => { 
          alert('valid')
        })
        .catch(e => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        })
      } else {

      }
    }
    
    getUserInfo(refreshToken)
    setLoading(false);
  }, [])

  const value = {
    currentUser,
    setLoading,
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
