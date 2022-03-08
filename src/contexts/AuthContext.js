import React, { useContext, useState, useEffect } from "react"
import Spinner from "../components/Spinner"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return alert('signup')
  }

  function login(email, password) {
    return alert('login')
  }

  function logout() {
    return alert('logout')
  }

  useEffect(() => {
    setCurrentUser(user)
    setLoading(false)
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      { loading ?  <Spinner /> : <>{children}</>}
    </AuthContext.Provider>
  )
}
