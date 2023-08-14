import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import './index.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



 const App = () =>{
  
  useEffect(() => {
    Aos.init({duration: 1000})
  })

 return(
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Subscribe />
      <Footer />
    </div>
 )
 }
  

export default App