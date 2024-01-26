import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';
import Login from './login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id/updateprofile" element={<UpdateProfile />} />
        <Route path="/:id/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
