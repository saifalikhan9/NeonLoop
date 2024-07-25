// "use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
// import Switch1 from "./components/Switch";
// import { ThemeProvider } from "./Contexts/Theme";
// import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [themeMode, setThemeMode] = useState("light");

//   const darkTheme = () => {
//     setThemeMode('dark');
//   };

//   const lightTheme = () => {
//     setThemeMode('light');
//   };

//   useEffect(() => {
//     document.querySelector("html").classList.remove("dark", "light");
//     document.querySelector("html").classList.add(themeMode);
//   }, [themeMode]);

//   return (
//     <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
//       <div className="w-full dark:bg-black" >
      
//           <Header  />
//           <div className="flex justify-end dark:bg-black" >
//             <Switch1/>
//           </div>
//           {/* Hero Section */}
          
//           <Hero  />
//           {/* Features Section */}
//           <Features />
//           {/* FAQs */}
         
       
//         {/* footer */}
//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
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