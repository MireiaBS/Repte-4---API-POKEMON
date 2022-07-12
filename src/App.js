import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/HomeComponent';
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import NavComponent from './components/NavComponent';


function App() {

  return (
      <BrowserRouter>
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
}


export default App;