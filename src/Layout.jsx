
import Footer from "./components/Footer/Footer";
import Header from "./components//Header/Header";
import { Outlet } from "react-router-dom";

import React from 'react'
import UserContextProvider from "./Contexts/UserContextProvider";


const Layout = () => {
  return (
   <UserContextProvider>
    <div className=" w-full bg-black">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </UserContextProvider>
  )
}

export default Layout