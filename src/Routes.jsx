import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Slider from './Components/Slider.jsx'
import BestSeller from './Components/BestSeller.jsx'
import Category from './Components/Category.jsx'
import ForYou from './Components/ForYou.jsx'
import Footer from './Components/Footer.jsx'
import ProductPage from './Components/ProductPage.jsx'
import SingleCategory from './Components/SingleCategory.jsx'
import Signup from './Components/signup.jsx'
import Login from './Components/Login.jsx'
import App from './App.jsx'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
                path: "/products/:key",
                element: <>
                    <Navbar />
                    <ProductPage />
                </>
            },
            {
                path: "/category/:category",
                element: <>
                    <Navbar />
                    <SingleCategory />
                </>
            },
            {
                path: "/signup",
                element: <>
                    <Signup />
                </>
            },
            {
                path: "/login",
                element: <>
                        <Login />
                </>
            },
        ]
    }
])