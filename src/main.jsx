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
import Contact from "./components/Contact/Contact.jsx";
import Customize from "./components/Customize/Customize.jsx";
// import Customize from './components/Customize/Customize.jsx'
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Address from "./components/Cart/AddressPage.jsx";
import Order from "./components/Order/Order.jsx";
import PaymentGateway from "./components/Pay/PaymentGateway.jsx";
import Checkout from './components/CheckOut/Checkout.jsx'
import OrderConfirmation from './components/Order/OrderConfirmation.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Hero />} />
      <Route path="contact" element={<Contact />} />
      <Route path="customize" element={<Customize />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="cart" element={<Cart />} />
      <Route path="address" element={<Address />} />
      <Route path="order" element={<Order />} />
      <Route path="pay" element={<PaymentGateway />} />
      <Route path="checkout" element={<Checkout/>} />
      <Route path="confirmation" element={<OrderConfirmation/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
