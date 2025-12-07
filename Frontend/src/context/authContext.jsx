/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (user) => {
      setUser(user)
    setIsAuthenticated(true)
  }


  const logout = () => 
{    setUser(null)
    setIsAuthenticated(false)};

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

