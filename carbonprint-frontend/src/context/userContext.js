import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({ ...decoded, token });
      } catch (e) {
        localStorage.removeItem(token);
      }
    }
  }, []);
  const login = (token) => {
    const decoded = jwtDecode(token);
    localStorage.setItem("token", token);
    setUser({ ...decoded, token });
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const useAuth = () => useContext(UserContext);
