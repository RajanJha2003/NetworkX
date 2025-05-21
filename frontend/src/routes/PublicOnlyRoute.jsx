import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const PublicOnlyRoute = ({children}) => {
    const { userData } = useContext(userDataContext);
  
    if (userData) {
      // Redirect to home if user is already authenticated
      return <Navigate to="/" />;
    }
    
    return children;
}

export default PublicOnlyRoute