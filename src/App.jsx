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
import Popup from './components/Popup/Popup';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

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
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero  handleOrderPopup={handleOrderPopup}/>
    <Products />
    <TopRatedPuja />
    <Banner/>
    <Services/>
    <Subscribe/>
    <Testimonial/>
    <Footer/>
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
   </div>
  )
}

export default App