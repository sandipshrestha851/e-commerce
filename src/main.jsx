import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./Routes.jsx";
// import { ProductsKeys } from "./App.jsx";
import { useState,createContext } from "react";

export const ProductsKeys = createContext();
function Root() {
  const [key, setKey] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ProductsKeys.Provider value={{ key, setKey, loggedIn, setLoggedIn }}>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </ProductsKeys.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);