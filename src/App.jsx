import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import TopRatedPuja from './components/TopRatedPuja/TopRatedPuja';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from "./components/Footer/Footer"

const App = () => {


  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
   <div>
    <Navbar/>
    <Hero/>
    <Products />
    <TopRatedPuja/>
    <Banner/>
    <Services/>
    <Subscribe/>
    <Testimonial/>
    <Footer/>
   </div>
  )
}

export default App