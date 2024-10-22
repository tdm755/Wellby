import React from 'react';
import HomePage from './Components/Pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   

    <Routes>
      <Route path='/' element={<HomePage />} />

    </Routes>
  );
}

export default App;
