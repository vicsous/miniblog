import { createContext, useContext, useState, useEffect } from "react"
import Spinner from "../components/Spinner"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setUser] = useState()
  const [loading, setLoading] = useState(true)

  function login(email, password) {
    alert('User logged!')
    return setUser({ username: '@teste', email: email, name: 'Teste'})
  }

  function logout() {
    alert('User logged out!')
    return setUser()
  }

  function signup() {
    alert('new user created')
    return setUser()
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
