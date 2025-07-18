import { Navigate } from "react-router-dom";
import { useAuth } from "../context/userContext";
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
