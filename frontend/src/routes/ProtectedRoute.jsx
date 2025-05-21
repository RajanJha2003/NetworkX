import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const { userData } = useContext(userDataContext);
  
  if (!userData) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" />;
  }
  
  return children;
}

export default ProtectedRoute