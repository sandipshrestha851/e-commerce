import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import Slider from "./Components/Slider.jsx";
import BestSeller from "./Components/BestSeller.jsx";
import Category from "./Components/Category.jsx";
import ForYou from "./Components/ForYou.jsx";
import Footer from "./Components/Footer.jsx";
import ProductPage from "./Components/ProductPage.jsx";
import SingleCategory from "./Components/SingleCategory.jsx";
import Signup from "./Components/signup.jsx";
import Login from "./Components/Login.jsx";

export default function AppRoutes() {
    return(
    <Routes>

      {/* Home page */}
      <Route
        path="/"
        element={
          <App />
        }
      >
        <Route
          index
          element={
            <>
              <Navbar />
              <Slider />
              <BestSeller />
              <Category />
              <ForYou />
              <Footer />
            </>
          }
        />

        <Route
          path="products/:key"
          element={
            <>
              <Navbar />
              <ProductPage />
            </>
          }
        />

        <Route
          path="category/:category"
          element={
            <>
              <Navbar />
              <SingleCategory />
            </>
          }
        />

      </Route>

      {/* Standalone pages */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={
        <>
        <Login />
        </>
        } />

    </Routes>
)
}