import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore';
import Footer from './components/Footer/Footer';
import Reviews from './components/Reviews/Reviews';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default App
