import React from 'react';
import HomePage from './Components/Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';

function App() {
  return (
   

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<Dashboard />} />

    </Routes>
  );
}

export default App;
