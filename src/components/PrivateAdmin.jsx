import { Navigate } from "react-router-dom";
import { isAuthenticate } from "../authenticate";

const PrivateAdmin = ({ children }) => {
  const auth = isAuthenticate();

  if (!auth || auth.role_id !== 1) {
    return <Navigate to="/signin" />;
  }
  return children;
};
export default PrivateAdmin;
