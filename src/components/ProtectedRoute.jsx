import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useUserAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace/>;
  }
  return children;
};

export default ProtectedRoute;
