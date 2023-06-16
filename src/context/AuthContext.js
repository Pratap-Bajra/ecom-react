import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const getToken = () => {
    const token = localStorage.getItem("token");
    return token ? token : null;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = () => {
    localStorage.setItem("token", token);
    //sessionStorage for tab closing
    //localstorage stays forever until logout
    setToken(token);
  };

  const clearToken = () => {
    localStorage.clear();
    setToken(null);
  };
  return (
    <AuthContext.Provider value={{ token, saveToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
}
