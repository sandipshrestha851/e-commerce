import React, {createContext,useState} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import './App.css'

export const ProductsKeys = createContext();
function App() {

  const [key , setKey] = useState()

  return (
    <>
    <ProductsKeys.Provider value={{key,setKey}}>
      <Navbar/>
      <Outlet/>
    </ProductsKeys.Provider>
    </>
    );
}

export default App;