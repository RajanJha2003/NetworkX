import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Login from './pages/Login'
import SignUpPage from './pages/Signup'
import ProtectedRoute from './routes/ProtectedRoute'
import PublicOnlyRoute from './routes/PublicOnlyRoute'

const App = () => {

  return (
    <Routes>
    <Route 
      path="/" 
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } 
    />
    
    <Route 
      path="/signup" 
      element={
        <PublicOnlyRoute>
          <SignUpPage />
        </PublicOnlyRoute>
      } 
    />
    
    <Route 
      path="/login" 
      element={
        <PublicOnlyRoute>
          <Login />
        </PublicOnlyRoute>
      } 
    />
  </Routes>
  )
}

export default App