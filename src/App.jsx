import React, {createContext,useState} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import './App.css'

export const ProductsKeys = createContext();
function App() {

  const [key , setKey] = useState();
  const [loggedIn,setLoggedIn] = useState(false);

  return (
    <>
    <ProductsKeys.Provider value={{key,setKey,loggedIn,setLoggedIn}}>
      <Outlet/>
    </ProductsKeys.Provider>
    </>
    );
}

export default App;