import { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  user: {id: string, email: string} | null;
  setCredentials: (user: {id: string, email: string}) => void;
  logOut: () => void
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{id: string, email: string} | null>({id: '1', email: 'gestopajonas@gmail.com'});

  function setCredentials(user: {id: string, email: string}) {
    setUser(user);
    localStorage.setItem("user",  JSON.stringify(user));
  }

  function logOut() {
    setUser(null);
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, setCredentials, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
