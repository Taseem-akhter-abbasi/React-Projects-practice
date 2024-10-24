// src/App.jsx
import React from 'react';
import { AuthProvider } from './AuthContext'; // Updated path for AuthContext
import Auth from './components/Auth';

const App = () => (
  <AuthProvider>
    <Auth onAuthSuccess={() => console.log('Authenticated!')} />
    {/* Other components */}
  </AuthProvider>
);

export default App;
