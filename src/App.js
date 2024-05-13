import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './Component/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Adminlogin from './Component/Adminlogin';
import Userlogin from './Component/Userlogin';
import AdminSignup from './Component/AdminSignup';
import UserSignup from './Component/UserSignup';
import AdminHomepage from './Component/AdminHomepage';
import Error from './Component/Error';

function App() {
  return (
    <div className='langing'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/userlogin' element={<Userlogin/>}/>
        <Route path='/adminsignup' element={<AdminSignup/>}/>
        <Route path='/usersignup' element={<UserSignup/>}/>
        <Route path='/adminhomepage/*' element={<AdminHomepage/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
