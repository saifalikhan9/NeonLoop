import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import "./index.css";

import Hero from "./components/Hero/HeroSection.jsx";
import Features from "./components//Features/Features.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Customize from "./components/Customize/Customize.jsx";
// import Customize from './components/Customize/Customize.jsx'
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Cart from "./components/Cart/Cart.jsx"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
         <Hero/>
        }
      />
      <Route path="contact" element={<Contact />} />
      <Route path="customize" element={<Customize />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="cart" element={<Cart />} />


    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
