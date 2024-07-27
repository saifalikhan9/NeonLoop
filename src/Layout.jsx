
import Footer from "./components/Footer/Footer";
import Header from "./components//Header/Header";
import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <div className=" w-full bg-black">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout