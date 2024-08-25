import { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  user: {id: string, email: string} | null;
  setCredentials: (user: {id: string, email: string}) => void;
  logOut: () => void
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function APIProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{id: string, email: string} | null>(null);

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

export default APIProvider;
