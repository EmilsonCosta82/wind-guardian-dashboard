import { createContext, useContext, useEffect, useState } from "react";

const USER = "SDPCTG";
const PASS = "CTGBrasil";
const STORAGE_KEY = "sdp-auth";

type AuthContextValue = {
  user: string | null;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setUser(saved);
  }, []);

  const login = (u: string, p: string) => {
    if (u.trim().toUpperCase() === USER && p === PASS) {
      localStorage.setItem(STORAGE_KEY, USER);
      setUser(USER);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
