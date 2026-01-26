import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Slider from './Components/Slider.jsx'
import BestSeller from './Components/BestSeller.jsx'
import Category from './Components/Category.jsx'
import ForYou from './Components/ForYou.jsx'
import Footer from './Components/Footer.jsx'
import ProductPage from './Components/ProductPage.jsx'
import Card from './Components/Card.jsx'
import picture from './assets/winter.png'
import './App.css'

import CategoryCard from './Components/CategoryCard.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Slider />
        <BestSeller />
        <Category />
        <ForYou />
        <Footer />
      </>
    },
    {
      path: "/products/:product",
      element: <>
        <Navbar />
        <ProductPage />
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