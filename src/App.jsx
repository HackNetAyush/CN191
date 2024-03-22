import { useState, useEffect } from 'react';
import Dashboard from './Components/Dash/Dashboard'
import Auth from './Components/Auth/Auth'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/config';

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const user = await new Promise((resolve, reject) => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe();
            resolve(user);
          }, reject);
        });

        setLoggedIn(!!user);
      } catch (error) {
        console.error('Error checking auth state:', error);
      } finally {
        setAuthLoading(false);
      }
    };

    checkAuthState();
  }, []);

  const ProtectedRoute = ({ element, ...rest }) => {
    if (authLoading) return null; // Render nothing until authentication state is determined
    return loggedIn ? element : <Navigate to="/auth/login" />;
  };

  return (
    <div className='app h-full w-full flex items-center justify-center'>
      <Routes>
        <Route path="/" element={<div>Landing</div>} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="auth">
          <Route path="login" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
