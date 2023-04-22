import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Notification from './UI/Notification';
// import '../node_modules/react-bootstrap/dist/react-bootstrap';

export default function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/createuser" element={ <Signup/> } />
        <Route path="/noti" element={ <Notification/> } />
      </Routes>
          
    </>
  )
}
