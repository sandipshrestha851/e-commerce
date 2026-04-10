import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React, {createContext,useState} from 'react'
import Navbar from './Components/Navbar.jsx'
import Slider from './Components/Slider.jsx'
import BestSeller from './Components/BestSeller.jsx'
import Category from './Components/Category.jsx'
import ForYou from './Components/ForYou.jsx'
import Footer from './Components/Footer.jsx'
import ProductPage from './Components/ProductPage.jsx'
import SingleCategory from './Components/SingleCategory.jsx'
import Card from './Components/Card.jsx'
import picture from './assets/winter.png'
import './App.css'
import CategoryCard from './Components/CategoryCard.jsx'
import Signup from './Components/signup.jsx'
import Login from './Components/Login.jsx'

export const ProductsKeys = createContext();
function App() {

  const [key , setKey] = useState()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <ProductsKeys.Provider value ={{key,setKey}}>
        <Navbar />
        <Slider />
        <BestSeller />
        <Category />
        <ForYou />
        <Footer />
        </ProductsKeys.Provider>
      </>
    },
    {
      path: "/products/:key",
      element: <>
      <ProductsKeys.Provider value ={{key,setKey}}>
        <Navbar />
        <ProductPage />
        </ProductsKeys.Provider>
      </>
    },
    {
      path: "/category/:category",
      element: <>
      <ProductsKeys.Provider value ={{key,setKey}}>
        <Navbar />
        <SingleCategory />
        </ProductsKeys.Provider>
      </>
    },
    {
      path: "/signup",
      element: <>
      <ProductsKeys.Provider value ={{key,setKey}}>
        <Signup/>
        </ProductsKeys.Provider>
      </>
    },
    {
      path: "/login",
      element: <>
      <ProductsKeys.Provider value ={{key,setKey}}>
        <Login/>
        </ProductsKeys.Provider>
      </>
    },
  ])

  return (
    <>
   
      <RouterProvider router={router} />
    </>
  )
}

export default App;