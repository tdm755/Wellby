import React from 'react';
import HomePage from './Components/Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import PersonalDetails from './Components/Pages/PersonalDetails';

function App() {
  return (
   

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/personaldetails' element={<PersonalDetails />} />

    </Routes>
  );
}

export default App;
