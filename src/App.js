import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';
import {
  BrowserRouter as router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/HomeComponent';
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import NavComponent from './components/NavComponent';


function App() {

  return (
   
        <>
          <NavComponent />
          <Home />
       
          <NavComponent />
          <Login />
        
          <NavComponent />
          <SignUp />
        </>
  )
}


export default App;
/* 
(
    
      <Routes>
        <Route path="/"
          element={
            <>
              <NavComponent />
              <Home />
            </>
          }
        />
        <Route path="/login"
          element={
            <>
              <NavComponent />
              <Login />
            </>
          }
        />
        <Route path="/sign_up"
          element={
            <>
              <NavComponent />
              <SignUp />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  )
*/