import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    // onAuthStateChanged
    setTimeout(() => {
      setIsAuthenticated(false);
    }, 1000);
  }, []);

  const login = async (email, password) => {
    // signInWithEmailAndPassword
    try {
    } catch (error) {}
  };
  const logout = async () => {
    // signOut
    try {
    } catch (error) {}
  };
  const register = async (email) => {
    // createUserWithEmail
    try {
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (value === undefined) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return value;
};
