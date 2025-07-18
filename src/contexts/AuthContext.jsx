import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/auth';
import { firestoreService } from '../services/firestore';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChange(async (user) => {
      if (user) {
        const { success, user: userProfile } = await firestoreService.getUser(user.uid);
        if (success) {
          setUser({ ...user, ...userProfile });
          setRole(userProfile.role);
        } else {
          setUser(user);
        }
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    const result = await authService.login(email, password);
    return result;
  };

  const register = async (email, password) => {
    const result = await authService.register(email, password);
    return result;
  };

  const logout = async () => {
    const result = await authService.logout();
    if (result.success) {
      setUser(null);
      setRole(null);
    }
    return result;
  };

  const value = {
    user,
    role,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};