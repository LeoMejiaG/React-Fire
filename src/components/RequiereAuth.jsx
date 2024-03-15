import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import PropTypes from "prop-types"


const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};
RequireAuth.propTypes = {
    children: PropTypes.object,
  };
export default RequireAuth;
