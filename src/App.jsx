import React, {createContext,useState} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import './App.css'


function App() {

  return (
    <>
      <Outlet/>
    </>
    );
}

export default App;