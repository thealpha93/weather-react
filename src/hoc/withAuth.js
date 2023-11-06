import React from "react";
import { Navigate } from "react-router-dom";
import { getAccessToken} from "../services/authService"

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    // Check if token exists
    const accessToken = getAccessToken()

    return accessToken ? <Component {...props} /> : <Navigate to="/login" />;;
  };

  return <AuthenticatedComponent />;
};

export default withAuth;
