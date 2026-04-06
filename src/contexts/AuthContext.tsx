import React, { useState, createContext, useContext, useEffect } from 'react';

interface User {
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => boolean;
  register: (email: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<string[]>([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('cpa_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const savedRegistered = localStorage.getItem('cpa_registered_users');
    if (savedRegistered) {
      setRegisteredUsers(JSON.parse(savedRegistered));
    } else {
      // Pre-register the admin
      const initialUsers = ['890305@wty.com'];
      setRegisteredUsers(initialUsers);
      localStorage.setItem('cpa_registered_users', JSON.stringify(initialUsers));
    }
  }, []);

  const login = (email: string) => {
    if (!registeredUsers.includes(email)) {
      return false;
    }
    const role = email === '890305@wty.com' ? 'admin' : 'user';
    const newUser: User = { email, role };
    setUser(newUser);
    localStorage.setItem('cpa_user', JSON.stringify(newUser));
    return true;
  };

  const register = (email: string) => {
    if (registeredUsers.includes(email)) {
      return false;
    }
    const newRegistered = [...registeredUsers, email];
    setRegisteredUsers(newRegistered);
    localStorage.setItem('cpa_registered_users', JSON.stringify(newRegistered));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cpa_user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
