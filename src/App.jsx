import HomePage from './Components/Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import PersonalDetails from './Components/Pages/PersonalDetails';
import EmergencyContacts from './Components/Pages/EmergencyContacts';
import MedicalDetails from './Components/Pages/MedicalDetails';
import MediclaimPolicies from './Components/Pages/MediclaimPolicies';
import PageNotFound from './Components/Pages/PageNotFound';

function App() {
  return (
   

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/personaldetails' element={<PersonalDetails />} />
      <Route path='/emergencycontacts' element={<EmergencyContacts />} />
      <Route path='/medicaldetails' element={<MedicalDetails />} />
      <Route path='/mediclaimpolicies' element={<MediclaimPolicies />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
